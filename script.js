const usernameWarning = document.getElementById("usernameWarning");
const passwordWarning = document.getElementById("passwordWarning");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const loginButton = document.getElementById('login');
const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', validate);

function validate(event) {

    event.preventDefault();  // Prevent form submission and page reload

    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();
    let isValid = true;

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    // Check if username is valid (using regex)
    if (!emailRegex.test(username)) {
        usernameWarning.style.display = 'block';  // Show warning if email format is invalid
        isValid = false;
    } else {
        usernameWarning.style.display = 'none';  // Hide warning if email format is valid
    }
    
    // Check if password is valid (minimum 8 characters)
    if (password.length < 8) {
        passwordWarning.style.display = 'block';  // Show warning if password is invalid
        isValid = false;
    } else {
        passwordWarning.style.display = 'none';  // Hide warning if password length is valid
    }

    // If both username and password are valid, show success message
    if (isValid) {
        alert('Login successful!');
        // Clear the inputs after successful login
        usernameInput.value = '';  // Clear the username input
        passwordInput.value = '';  // Clear the password input
    }
}
