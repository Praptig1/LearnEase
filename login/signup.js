// signup.js

document.addEventListener('DOMContentLoaded', function () {
    const signupForm = document.querySelector('.signup-form');

    signupForm.addEventListener('submit', function (event) {
        event.preventDefault();

        // Get form inputs
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const passwordRepeat = document.getElementById('password-repeat').value;

        // Check if passwords match
        if (password !== passwordRepeat) {
            alert("Passwords don't match");
            return;
        }

        localStorage.setItem('email', email);
        localStorage.setItem('password', password);

        alert('Sign up successful!');

        window.location.href = 'signin.html';
    });
});
