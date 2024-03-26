// login.js

// Sample user data for demonstration purposes
const users = [
    { email: "user1@example.com", password: "password1" },
    { email: "user2@example.com", password: "password2" },
    // Add more users as needed
];

const loginForm = document.getElementById("loginForm");
const messageDiv = document.getElementById("message");

loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const email = loginForm.email.value;
    const password = loginForm.password.value;

    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
        messageDiv.textContent = "Login successful!";
        window.location.href = 'Courses/course_list.html';
    } else {
        messageDiv.textContent = "Invalid email or password. Please try again.";
    }


});

