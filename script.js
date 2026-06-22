// Reference Points inside the DOM Hierarchy
const tableBody = document.getElementById('userTableBody');
const monthFilter = document.getElementById('monthFilter');
const genderFilter = document.getElementById('genderFilter');
const totalUsersCard = document.getElementById('totalUsersCard');
const dynamicFilterCard = document.getElementById('dynamicFilterCard');
<<<<<<< HEAD
const dynamicFilterLabel = document.getElementById('dynamicFilterLabel');
const paginationControls = document.getElementById('paginationControls');
=======
const dynamicFilterLabel = document.getElementById('dynamicFilterLabel'); 
>>>>>>> 6951f0a10bf30c4f58f07e7811ed2685f8ff94ef

// Modal Elements
const modal = document.getElementById('userModal');
const openModalBtn = document.getElementById('openModalBtn');
const cancelBtn = document.getElementById('cancelBtn');
const userForm = document.getElementById('userForm');

// This now holds whatever comes back from the API
let usersData = [];

<<<<<<< HEAD
// ---------- PAGINATION STATE ----------
let currentPage = 1;
const rowsPerPage = 10; // Change this to show more/fewer rows per page

=======
>>>>>>> 6951f0a10bf30c4f58f07e7811ed2685f8ff94ef
// Fetch users from the backend
async function fetchUsers() {
    try {
        const response = await fetch('https://charity-minds-backend.onrender.com/api/v1/users');

        if (!response.ok) {
            throw new Error(`Request failed with status ${response.status}`);
        }

        const result = await response.json();

<<<<<<< HEAD
        usersData = Array.isArray(result) ? result : (result.data || result.users || []);

=======
        // Handle either a raw array response, or a wrapped { data: [...] } shape
        usersData = Array.isArray(result) ? result : (result.data || result.users || []);

        // Now that data has arrived, set the baseline total and render the table
>>>>>>> 6951f0a10bf30c4f58f07e7811ed2685f8ff94ef
        totalUsersCard.textContent = usersData.length;
        updateDashboardView();

    } catch (error) {
        console.error('Failed to fetch users:', error);
        tableBody.innerHTML = `<tr><td colspan="8" class="no-records">Failed to load users. Please try again later.</td></tr>`;
<<<<<<< HEAD
        paginationControls.innerHTML = '';
=======
>>>>>>> 6951f0a10bf30c4f58f07e7811ed2685f8ff94ef
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

<<<<<<< HEAD
    // Reset to page 1 whenever filters change so we don't land on an empty page
    currentPage = 1;

    renderTablePage(matchingRecords);
=======
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
>>>>>>> 6951f0a10bf30c4f58f07e7811ed2685f8ff94ef

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

<<<<<<< HEAD
// ---------- PAGINATION-AWARE TABLE RENDER ----------
function renderTablePage(matchingRecords) {
    tableBody.innerHTML = '';

    if (matchingRecords.length === 0) {
        tableBody.innerHTML = `<tr><td colspan="8" class="no-records">No users matched your filter criteria.</td></tr>`;
        paginationControls.innerHTML = '';
        return;
    }

    const totalPages = Math.ceil(matchingRecords.length / rowsPerPage);

    // Clamp currentPage in case filters shrank the result set
    if (currentPage > totalPages) currentPage = totalPages;
    if (currentPage < 1) currentPage = 1;

    const startIndex = (currentPage - 1) * rowsPerPage;
    const endIndex = startIndex + rowsPerPage;
    const pageRecords = matchingRecords.slice(startIndex, endIndex);

    pageRecords.forEach(user => {
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

    renderPagination(matchingRecords, totalPages);
}

// ---------- BUILD PAGINATION BUTTONS ----------
function renderPagination(matchingRecords, totalPages) {
    paginationControls.innerHTML = '';

    if (totalPages <= 1) return; // No need for pagination if everything fits on one page

    // "Previous" button
    const prevBtn = document.createElement('button');
    prevBtn.textContent = 'Previous';
    prevBtn.disabled = currentPage === 1;
    prevBtn.addEventListener('click', () => {
        currentPage--;
        renderTablePage(matchingRecords);
    });
    paginationControls.appendChild(prevBtn);

    // Numbered page buttons
    for (let i = 1; i <= totalPages; i++) {
        const pageBtn = document.createElement('button');
        pageBtn.textContent = i;
        pageBtn.classList.toggle('active-page', i === currentPage);
        pageBtn.addEventListener('click', () => {
            currentPage = i;
            renderTablePage(matchingRecords);
        });
        paginationControls.appendChild(pageBtn);
    }

    // "Next" button
    const nextBtn = document.createElement('button');
    nextBtn.textContent = 'Next';
    nextBtn.disabled = currentPage === totalPages;
    nextBtn.addEventListener('click', () => {
        currentPage++;
        renderTablePage(matchingRecords);
    });
    paginationControls.appendChild(nextBtn);
}

=======
>>>>>>> 6951f0a10bf30c4f58f07e7811ed2685f8ff94ef
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

<<<<<<< HEAD
// Kick things off by fetching from the backend
fetchUsers();
=======
// Kick things off by fetching from the backend instead of rendering hardcoded data
fetchUsers();
>>>>>>> 6951f0a10bf30c4f58f07e7811ed2685f8ff94ef
