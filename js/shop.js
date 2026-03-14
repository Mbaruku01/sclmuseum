// Theme Manager
const darkToggle = document.getElementById('darkToggle');
const darkIcon = document.getElementById('darkIcon');

darkToggle.onclick = () => {
    document.documentElement.classList.toggle('dark');
    const isDark = document.documentElement.classList.contains('dark');
    darkIcon.className = isDark ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
};

// Counter Animation
function animateValue(id, end, duration) {
    let start = 0;
    const obj = document.getElementById(id);
    const stepTime = Math.abs(Math.floor(duration / end));
    const timer = setInterval(() => {
        start += Math.ceil(end / 100);
        if (start >= end) {
            obj.innerText = end.toLocaleString();
            clearInterval(timer);
        } else {
            obj.innerText = start.toLocaleString();
        }
    }, stepTime);
}

// Charts Initialization
const ctxSales = document.getElementById('salesChart').getContext('2d');
new Chart(ctxSales, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
            label: 'Sales',
            data: [1200, 1900, 1500, 2500, 2200, 3100],
            borderColor: '#7c3aed',
            tension: 0.4,
            fill: true,
            backgroundColor: 'rgba(124, 58, 237, 0.1)'
        }]
    },
    options: {
        responsive: true,
        plugins: { legend: { display: false } },
        scales: { y: { grid: { display: false } }, x: { grid: { display: false } } }
    }
});

// AI Chat Logic
const chatBox = document.getElementById('chatBox');
const chatToggle = document.getElementById('chatToggle');
const chatClose = document.getElementById('chatClose');

chatToggle.onclick = () => chatBox.classList.remove('hidden');
chatClose.onclick = () => chatBox.classList.add('hidden');

// Initialize everything on load
window.onload = () => {
    animateValue('totalOrders', 1245, 2000);
    animateValue('totalRevenue', 12890000, 2000);
    animateValue('uniqueVisitors', 8430, 2000);
};