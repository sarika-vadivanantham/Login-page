const usernameWarning = document.getElementById("usernameWarning");
const passwordWarning =document.getElementById("passwordWarning");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const loginButton = document.getElementById('login');
const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', validate);

function validate(event) {

    event.preventDefault();

    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();
    let isValid = true;

    if (!usernameInput.checkValidity()) {
        usernameWarning.style.display = 'block';
        isValid = false;
    }
    
    if (password.length < 8) {
        passwordWarning.style.display = 'block';
        isValid = false;
    } else {
        passwordWarning.style.display = 'none';
        passwordInput.value = '';
    }

    if (isValid) {
        alert('Login successful!');
        usernameInput.value = '';
        passwordInput.value = '';
    }
}
