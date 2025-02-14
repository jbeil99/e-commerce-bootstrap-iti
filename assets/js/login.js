document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    document.getElementById('emailError').textContent = '';
    document.getElementById('passwordError').textContent = '';

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        document.getElementById('emailError').textContent = 'Please enter a valid email address.';
        document.getElementById('successMessage').display = 'none';

    }

    if (password.length < 5) {
        document.getElementById('passwordError').textContent = 'Password must be at least 5 characters long.';
        document.getElementById('successMessage').display = 'none';
            
    }

    if (emailRegex.test(email) && password.length > 5) {
        document.getElementById('successMessage').textContent = 'Login successfully.';
        document.getElementById('successMessage').style.color = 'green';
    }

    // document.getElementById('successMessage').textContent = 'Login successfully.';
    // document.getElementById('successMessage').style.color = 'green';
});
