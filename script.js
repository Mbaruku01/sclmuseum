document.addEventListener('DOMContentLoaded', function() {
    const passwordField = document.getElementById('password');
    const toggleIcon = document.getElementById('eye-icon');

    document.getElementById('toggle-password').addEventListener('click', function() {
        if (passwordField.type === 'password') {
            passwordField.type = 'text';
            toggleIcon.classList.remove('fa-eye');
            toggleIcon.classList.add('fa-eye-slash');
        } else {
            passwordField.type = 'password';
            toggleIcon.classList.remove('fa-eye-slash');
            toggleIcon.classList.add('fa-eye');
        }
    });
});
