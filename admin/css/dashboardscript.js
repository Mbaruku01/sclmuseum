// Theme Elements
const themeToggle = document.getElementById('themeToggle');
const themeText = document.getElementById('themeText');
const body = document.documentElement;

// Mobile Menu Elements
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('sidebarOverlay');

// 1. Theme Logic
themeToggle.addEventListener('click', () => {
  const isDark = body.classList.toggle('dark');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
  updateThemeUI(isDark);
});

function updateThemeUI(isDark) {
  const icon = themeToggle.querySelector('i');
  icon.className = isDark ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
  themeText.innerText = isDark ? "Light Mode" : "Dark Mode";
}

// 2. Mobile Menu Logic
mobileMenuBtn.addEventListener('click', () => {
  sidebar.classList.add('show');
  overlay.classList.remove('hidden');
});

overlay.addEventListener('click', () => {
  sidebar.classList.remove('show');
  overlay.classList.add('hidden');
});

// 3. Initialize on Load
if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark');
  updateThemeUI(true);
}

function checkAdminAccess(event) {
    // 1. Stop the browser from going to the link immediately
    event.preventDefault();

    // The "2121" password hidden in Base64 format
    const secretKey = "MjEyMQ==";

    // 2. Show the warning message
    const message = "This page is strictly for the CEO and HR Department.\n\nPlease enter the authorization code to proceed:";
    
    // 3. Ask for the code
    const userCode = prompt(message);

    // 4. Check if the code is correct
    // btoa(userCode) converts their input into Base64 to match our secretKey
    if (userCode && btoa(userCode) === secretKey) {
        // Correct code - proceed to the page
        window.location.href = event.currentTarget.href;
    } else if (userCode === null) {
        // User clicked cancel - stay on the current page
        return false;
    } else {
        // Wrong code
        alert("Access Denied: Incorrect Authorization Code.");
        return false;
    }
}

function togglePaymentStructure() {
    const modal = document.getElementById('paymentModal');
    modal.classList.toggle('hidden');
}

document.addEventListener('DOMContentLoaded', () => {
    const addEmployeeBtn = document.getElementById('addEmployeeBtn');

    if (addEmployeeBtn) {
        addEmployeeBtn.addEventListener('click', () => {
            
            const secretKey = "MjEyMQ=="; 
            
            const message = "This section is restricted to the CEO and HR Department.\n\nPlease enter the access password:";
            const userInput = prompt(message);

            // btoa(userInput) turns whatever the user types into Base64 to compare it
            if (userInput && btoa(userInput) === secretKey) {
                window.location.href = 'admindashboard.html';
            } else if (userInput !== null) {
                alert("Access Denied: Incorrect password.");
            }
        });
    }
});

// Configuration
const globalSecretKey = "MjEyMQ=="; // "2121" in Base64

document.addEventListener('click', (event) => {
    // 1. Identify what was clicked
    const target = event.target;

    // 2. Ask for the password
    const message = "Action Restricted: Please enter the Authorization Code to proceed:";
    const userInput = prompt(message);

    // 3. Validate
    if (userInput && btoa(userInput) === globalSecretKey) {
        // Correct password - allow the click to happen
        console.log("Access granted for action.");
    } else {
        // Wrong password or Cancel - STOP the click completely
        event.preventDefault();
        event.stopPropagation();
        alert("Access Denied: Action cancelled.");
    }
}, true); // The 'true' here is key: it catches the click during the "Capture" phase