// Dataset extracted from the system payload
const usersData = [
    {"firstName": "Mary", "lastName": "Watson", "username": "marywatson", "email": "marywatson@gmail.com", "phone": "0712345679", "dob": "13/11/2025", "gender": "female", "createdAt": "2026-02-24T19:43:24.275Z"},
    {"firstName": "John", "lastName": "Wick", "username": "johnwick", "email": "johnwick@gmail.com", "phone": "0712345673", "dob": "13/11/2021", "gender": "male", "createdAt": "2026-02-25T18:10:34.992Z"},
    {"firstName": "Justin", "lastName": "Kang'ethe", "username": "kram", "email": "mark@kram.codes", "phone": "0712345678", "dob": "2026-03-17", "gender": "male", "createdAt": "2026-03-25T19:14:47.706Z"},
    {"firstName": "Peter", "lastName": "Parker", "username": "kram2", "email": "mark@kram.code", "phone": "0712345675", "dob": "2026-03-17", "gender": "male", "createdAt": "2026-03-25T19:16:09.112Z"},
    {"firstName": "Mark", "lastName": "Muthii", "username": "kram3", "email": "mark@kram.codess", "phone": "0712345675323", "dob": "2026-03-17", "gender": "male", "createdAt": "2026-03-25T19:18:17.801Z"},
    {"firstName": "Justin", "lastName": "Timber", "username": "kram4", "email": "mark@kram.codessdf", "phone": "+25471234543", "dob": "2026-03-11", "gender": "male", "createdAt": "2026-03-25T19:22:13.308Z"},
    {"firstName": "Emilia", "lastName": "Muthii", "username": "kram5", "email": "mark@kram.codessss", "phone": "2547238191712", "dob": "2026-03-17", "gender": "male", "createdAt": "2026-03-25T19:23:16.008Z"},
    {"firstName": "Mark", "lastName": "Mutua", "username": "kram6", "email": "mark@kram.codessdfsadf", "phone": "+2547238191778", "dob": "2026-03-04", "gender": "male", "createdAt": "2026-03-25T19:51:49.302Z"},
    {"firstName": "Brian", "lastName": "Mbogo", "username": "mbogo", "email": "mbogo7070@gmail.com", "phone": "mbogo7070@gmail.com", "dob": "1990-06-07", "gender": "Male", "createdAt": "2026-03-27T09:25:19.922Z"},
    {"firstName": "Jane", "lastName": "Wangeci", "username": "janed", "email": "jane.j@example.com", "phone": "+254700123456", "dob": "2009-07-06", "gender": "Female", "createdAt": "2026-03-27T09:31:16.223Z"},
    {"firstName": "Davies", "lastName": "Macharia", "username": "iamkram", "email": "kram@codes.com", "phone": "0712748573", "dob": "1900-07-07", "gender": "male", "createdAt": "2026-05-19T13:20:00.953Z"},
    {"firstName": "Daniel", "lastName": "Wanjiku", "username": "daniellxx", "email": "wanjikumwangidaniel@gmail.com", "phone": "0112190179", "dob": "2007-03-21", "gender": "male", "createdAt": "2026-06-02T12:52:44.212Z"},
    {"firstName": "ALEX", "lastName": "DAMIAN", "username": "ALLEXY", "email": "ALEXY@gmail.com", "phone": "0112192345", "dob": "2007-03-21", "gender": "male", "createdAt": "2026-06-02T13:22:20.810Z"},
    {"firstName": "charly", "lastName": "black", "username": "blacky", "email": "balcky@email.com", "phone": "123456781", "dob": "2007-03-21", "gender": "male", "createdAt": "2026-06-02T13:44:38.718Z"},
    {"firstName": "adam", "lastName": "prince", "username": "adamprince", "email": "adamprince@gmail.com", "phone": "0700000000", "dob": "2000-01-20", "gender": "male", "createdAt": "2026-06-03T08:04:40.621Z"},
    {"firstName": "ethan", "lastName": "hunt", "username": "ethanhunt", "email": "ethanhunt@gmail.com", "phone": "0710000000", "dob": "2000-01-20", "gender": "male", "createdAt": "2026-06-03T12:32:41.350Z"},
    {"firstName": "james", "lastName": "bond", "username": "jamesbond", "email": "jamesbond@gmail.com", "phone": "0720000000", "dob": "2000-01-20", "gender": "male", "createdAt": "2026-06-03T12:50:52.355Z"},
    {"firstName": "tyron", "lastName": "dohza", "username": "tyrondohza", "email": "dohzatyron0@gmail.com", "phone": "0768310269", "dob": "2007-12-19", "gender": "male", "createdAt": "2026-06-03T14:56:12.046Z"},
    {"firstName": "Jackson", "lastName": "Peter", "username": "kram.codes21", "email": "mark@kram.codes21", "phone": "07123456765", "dob": "2026-06-01", "gender": "male", "createdAt": "2026-06-04T09:16:12.821Z"},
    {"firstName": "Peter", "lastName": "Parker", "username": "peterparker", "email": "peter@gmail.com", "phone": "3232323232", "dob": "2026-06-01", "gender": "male", "createdAt": "2026-06-04T09:18:58.012Z"},
    {"firstName": "Eric", "lastName": "Tosh", "username": "kram243", "email": "mark@kram.codes43", "phone": "+25471234543", "dob": "2026-06-01", "gender": "male", "createdAt": "2026-06-04T09:23:30.315Z"},
    {"firstName": "Gero", "lastName": "Gilbert", "username": "kram65", "email": "mark@kram.codes65", "phone": "071234567865", "dob": "2026-06-01", "gender": "male", "createdAt": "2026-06-05T07:01:16.239Z"},
    {"firstName": "John", "lastName": "Deree", "username": "kram87", "email": "mark@kram.codes87", "phone": "072381917287", "dob": "2026-06-01", "gender": "male", "createdAt": "2026-06-05T07:01:59.733Z"},
    {"firstName": "Mark", "lastName": "Kamau", "username": "kram09", "email": "mark@kram.cot", "phone": "0723678542", "dob": "2026-06-01", "gender": "male", "createdAt": "2026-06-08T15:01:12.895Z"},
    {"firstName": "Fred", "lastName": "Bosco", "username": "kram092", "email": "mark@kram.cot2", "phone": "07236785422", "dob": "2026-06-01", "gender": "male", "createdAt": "2026-06-08T15:03:06.100Z"},
    {"firstName": "Thomas", "lastName": "Shelby", "username": "kram76", "email": "mark@kram.codes67", "phone": "071234567876", "dob": "2026-06-01", "gender": "male", "createdAt": "2026-06-08T15:07:29.892Z"},
    {"firstName": "Mark", "lastName": "Muthii", "username": "kram55", "email": "mark@kram.codes55", "phone": "071234567855", "dob": "2026-06-01", "gender": "male", "createdAt": "2026-06-08T15:08:25.388Z"},
    {"firstName": "tyron", "lastName": "dohza", "username": "qwertyuiopo", "email": "dohzatyron@gmail.com", "phone": "07668310269", "dob": "2007-12-19", "gender": "male", "createdAt": "2026-06-09T13:00:20.169Z"},
    {"firstName": "Bellamy", "lastName": "Ombaso", "username": "bellamy ombaso", "email": "flossyombaso@gmail.com", "phone": "0795434499", "dob": "2004-07-22", "gender": "male", "createdAt": "2026-06-09T13:24:02.064Z"},
    {"firstName": "jayden", "lastName": "ogero", "username": "jayden", "email": "jaydenogero2@gmail.com", "phone": "0726984471", "dob": "2011-09-22", "gender": "male", "createdAt": "2026-06-09T13:27:49.001Z"},
    {"firstName": "batman", "lastName": "batman", "username": "batmanbatman", "email": "batman@gmail.com", "phone": "0795434496", "dob": "2009-07-22", "gender": "male", "createdAt": "2026-06-09T13:35:58.997Z"},
    {"firstName": "Ryan", "lastName": "Waweru", "username": "Rayzan", "email": "ryanwaweru08@gmail.com", "phone": "0703450885", "dob": "2006-02-04", "gender": "male", "createdAt": "2026-06-09T14:20:55.065Z"},
    {"firstName": "Stephen", "lastName": "Ndege", "username": "Blackhood", "email": "stephenndege07@gmail.com", "phone": "0793762053", "dob": "2003-12-06", "gender": "male", "createdAt": "2026-06-09T14:34:35.675Z"},
    {"firstName": "Bellamy", "lastName": "Ombaso", "username": "bondbellamy", "email": "bondbellamy@gmail.com", "phone": "076949439248", "dob": "9999-08-08", "gender": "other", "createdAt": "2026-06-10T13:40:42.977Z"},
    {"firstName": "john", "lastName": "cole", "username": "ghewsd", "email": "johncole@gmail.com", "phone": "0745987098", "dob": "2026-06-24", "gender": "male", "createdAt": "2026-06-11T08:45:19.939Z"},
    {"firstName": "John", "lastName": "Wick 2", "username": "johnw", "email": "j@gmail.com", "phone": "+254732323232", "dob": "1990-07-07", "gender": "male", "createdAt": "2026-06-11T10:08:06.980Z"}
];

// Reference Points inside the DOM Hierarchy
const tableBody = document.getElementById('userTableBody');
const monthFilter = document.getElementById('monthFilter');
const genderFilter = document.getElementById('genderFilter');
const totalUsersCard = document.getElementById('totalUsersCard');
const dynamicFilterCard = document.getElementById('dynamicFilterCard');
const dynamicFilterLabel = document.getElementById('dynamicFilterLabel');

// Initialize the primary baseline total user metric
totalUsersCard.textContent = usersData.length;

// Filter Evaluation & Table Rendering Function
function updateDashboardView() {
    const activeMonth = monthFilter.value;
    const activeGender = genderFilter.value;

    // Filter down array records based on option inputs
    const matchingRecords = usersData.filter(user => {
        // Obtains string format index (e.g. "03" from "2026-03-25...")
        const parsedJoinedMonth = user.createdAt.substring(5, 7); 
        
        const isMonthMatch = (activeMonth === 'all' || parsedJoinedMonth === activeMonth);
        const isGenderMatch = (activeGender === 'all' || user.gender.toLowerCase() === activeGender.toLowerCase());
        
        return isMonthMatch && isGenderMatch;
    });

    // Wipe down active rows inside the DOM Table Body element
    tableBody.innerHTML = '';

    // If zero evaluations exist matching configurations
    if (matchingRecords.length === 0) {
        tableBody.innerHTML = `<tr><td colspan="8" class="no-records">No users matched your filter criteria.</td></tr>`;
    } else {
        // Construct and insert new rows element entries iteratively
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

    // Dynamic handling updates targeting the top-right metrics card
    dynamicFilterCard.textContent = matchingRecords.length;
    
    // Adapt card footer label context dynamically
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

// Add event handlers looking out for drop down updates
monthFilter.addEventListener('change', updateDashboardView);
genderFilter.addEventListener('change', updateDashboardView);

// Initial View Render Generation 
updateDashboardView();