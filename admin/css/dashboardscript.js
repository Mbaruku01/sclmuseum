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
    // 1. Stop the browser from going to admindashboard.html immediately
    event.preventDefault();

    // 2. Show the warning message
    const message = "This page is strictly for the CEO and HR Department.\n\nPlease enter the authorization code to proceed:";
    
    // 3. Ask for the code
    const userCode = prompt(message);

    // 4. Check if the code is correct
    if (userCode === "2121") {
        // Correct code - proceed to the page
        window.location.href = event.currentTarget.href;
    } else if (userCode === null) {
        // User clicked cancel - do nothing
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