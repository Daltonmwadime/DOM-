// Reference Points inside the DOM Hierarchy
const tableBody = document.getElementById('userTableBody');
const monthFilter = document.getElementById('monthFilter');
const genderFilter = document.getElementById('genderFilter');
const totalUsersCard = document.getElementById('totalUsersCard');
const dynamicFilterCard = document.getElementById('dynamicFilterCard');
const dynamicFilterLabel = document.getElementById('dynamicFilterLabel'); 

// Modal Elements
const modal = document.getElementById('userModal');
const openModalBtn = document.getElementById('openModalBtn');
const cancelBtn = document.getElementById('cancelBtn');
const userForm = document.getElementById('userForm');

// This now holds whatever comes back from the API
let usersData = [];

// Fetch users from the backend
async function fetchUsers() {
    try {
        const response = await fetch('https://charity-minds-backend.onrender.com/api/v1/users');

        if (!response.ok) {
            throw new Error(`Request failed with status ${response.status}`);
        }

        const result = await response.json();

        // Handle either a raw array response, or a wrapped { data: [...] } shape
        usersData = Array.isArray(result) ? result : (result.data || result.users || []);

        // Now that data has arrived, set the baseline total and render the table
        totalUsersCard.textContent = usersData.length;
        updateDashboardView();

    } catch (error) {
        console.error('Failed to fetch users:', error);
        tableBody.innerHTML = `<tr><td colspan="8" class="no-records">Failed to load users. Please try again later.</td></tr>`;
    }
}

// Filter Evaluation & Table Rendering Function
function updateDashboardView() {
    const activeMonth = monthFilter.value;
    const activeGender = genderFilter.value;

    const matchingRecords = usersData.filter(user => {
        const parsedJoinedMonth = user.createdAt.substring(5, 7);
        const isMonthMatch = (activeMonth === 'all' || parsedJoinedMonth === activeMonth);
        const isGenderMatch = (activeGender === 'all' || user.gender.toLowerCase() === activeGender.toLowerCase());
        return isMonthMatch && isGenderMatch;
    });

    tableBody.innerHTML = '';

    if (matchingRecords.length === 0) {
        tableBody.innerHTML = `<tr><td colspan="8" class="no-records">No users matched your filter criteria.</td></tr>`;
    } else {
        matchingRecords.forEach(user => {
            const tableRow = document.createElement('tr');
            tableRow.innerHTML = `
                <td>${user.firstName}</td>
                <td>${user.lastName}</td>
                <td><strong>${user.username}</strong></td>
                <td>${user.email}</td>
                <td>${user.phone}</td>
                <td>${user.dob}</td>
                <td>${user.gender.toLowerCase()}</td>
                <td>${user.createdAt}</td>
            `;
            tableBody.appendChild(tableRow);
        });
    }

    dynamicFilterCard.textContent = matchingRecords.length;

    let cardLabelText = 'Active Matches';
    if (activeMonth !== 'all') {
        const structuralMonths = ["January", "February", "March", "April", "May", "June"];
        cardLabelText = `Joined in ${structuralMonths[parseInt(activeMonth) - 1]}`;
    } else {
        cardLabelText = `Total Matches`;
    }

    if (activeGender !== 'all') {
        cardLabelText += ` (${activeGender.toUpperCase()})`;
    }

    dynamicFilterLabel.textContent = cardLabelText;
}

// ---------- ADD NEW USER FUNCTIONALITY ----------

openModalBtn.addEventListener('click', function() {
    modal.style.display = 'flex';
});

function closeModal() {
    modal.style.display = 'none';
    userForm.reset();
}

cancelBtn.addEventListener('click', closeModal);

window.addEventListener('click', function(event) {
    if (event.target === modal) {
        closeModal();
    }
});

userForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const dob = document.getElementById('dob').value;
    const gender = document.getElementById('gender').value;

    if (!firstName || !lastName || !username || !email || !phone || !dob || !gender) {
        alert('Please fill in all fields.');
        return;
    }

    const newUser = {
        firstName, lastName, username, email, phone, dob, gender,
        createdAt: new Date().toISOString()
    };

    usersData.push(newUser);
    totalUsersCard.textContent = usersData.length;
    updateDashboardView();

    alert(`User "${firstName} ${lastName}" added successfully!`);
    closeModal();
});

monthFilter.addEventListener('change', updateDashboardView);
genderFilter.addEventListener('change', updateDashboardView);

// Kick things off by fetching from the backend instead of rendering hardcoded data
fetchUsers();
