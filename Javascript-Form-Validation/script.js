// Get the form element
const form = document.getElementById('form');

// Get the input fields
const fullName = document.getElementById('fullname');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('password2');

// Function to show error message
function showError(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    small.innerText = message;
    formControl.className = 'form-control error';
}

// Function to show success outline
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

// Function to check if email is valid
function isValidEmail(email) {
    // Regular expression for email validation
    return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
}

// Event listener for form submission
form.addEventListener('submit', function(e) {
    e.preventDefault();

    // Check Full Name
    if (fullName.value.trim() === '') {
        showError(fullName, 'Full Name is required');
    } else {
        showSuccess(fullName);
    }

    // Check Username
    if (username.value.trim() === '') {
        showError(username, 'Username is required');
    } else if (username.value.length < 4) {
        showError(username, 'Username must be at least 4 characters');
    } else {
        showSuccess(username);
    }

    // Check Email
    if (email.value.trim() === '') {
        showError(email, 'Email is required');
    } else if (!isValidEmail(email.value)) {
        showError(email, 'Email is not valid');
    } else {
        showSuccess(email);
    }

    // Check Password
    if (password.value.trim() === '') {
        showError(password, 'Password is required');
    } else {
        showSuccess(password);
    }

    // Check Confirm Password
    if (confirmPassword.value.trim() === '') {
        showError(confirmPassword, 'Confirm Password is required');
    } else if (confirmPassword.value !== password.value) {
        showError(confirmPassword, 'Passwords do not match');
    } else {
        showSuccess(confirmPassword);
    }
});
