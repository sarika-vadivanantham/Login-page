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
    
    const isValidUsername = validateUsername(username);
    const isValidPassword = validatePassword(password);

    if (isValidUsername && isValidPassword) {
        // Clear the inputs after successful login
        usernameInput.value = ''; 
        passwordInput.value = ''; 
        setTimeout(() => {
            alert('Login successful!');
        }, 10);
    }
}

function validateUsername(username) {
    // Email regex pattern
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(username)) {
        usernameWarning.style.display = 'block';  // Show warning if email format is invalid
        return false;
    } else {
        usernameWarning.style.display = 'none'; // Hide warning if email format is valid
        return true;
    }
}

function validatePassword(password) {
    if (password.length < 8) {
        console.log('password invalid');
        passwordWarning.style.display = 'block';  // Show warning if password is invalid
        return false;
    } else {
        passwordWarning.style.display = 'none'; // Hide warning if password length is valid
        return true;
    }
}
