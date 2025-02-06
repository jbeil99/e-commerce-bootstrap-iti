document.getElementById('registrationForm').addEventListener('submit', function (event) {
    event.preventDefault();

    clearErrors();

    let isValid = true;

    const firstName = document.getElementById('firstName').value.trim();
    if (!firstName) {
        showError('firstName', 'First name is required.');
        isValid = false;
    }

    const lastName = document.getElementById('lastName').value.trim();
    if (!lastName) {
        showError('lastName', 'Last name is required.');
        isValid = false;
    }

    const email = document.getElementById('email').value.trim();
    if (!email || !validateEmail(email)) {
        showError('email', 'Valid email is required.');
        isValid = false;
    }

    const phoneNumber = document.getElementById('phoneNumber').value.trim();
    if (!phoneNumber || !validatePhoneNumber(phoneNumber)) {
        showError('phoneNumber', 'Valid phone number is required.');
        isValid = false;
    }

    const address = document.getElementById('address').value.trim();
    if (!address) {
        showError('address', 'Address is required.');
        isValid = false;
    }

    const city = document.getElementById('city').value.trim();
    if (!city) {
        showError('city', 'City is required.');
        isValid = false;
    }

    const postCode = document.getElementById('postCode').value.trim();
    if (!postCode) {
        showError('postCode', 'Post code is required.');
        isValid = false;
    }

    const country = document.getElementById('country').value.trim();
    if (!country) {
        showError('country', 'Country is required.');
        isValid = false;
    }

    if (isValid) {
        alert('Form submitted successfully!');
       
    }
});

function showError(fieldId, message) {
    const field = document.getElementById(fieldId);
    field.classList.add('is-invalid');
    const errorElement = field.nextElementSibling;
    errorElement.textContent = message;
}

function clearErrors() {
    const errorElements = document.querySelectorAll('.is-invalid');
    errorElements.forEach(element => {
        element.classList.remove('is-invalid');
    });

    const errorMessages = document.querySelectorAll('.invalid-feedback');
    errorMessages.forEach(element => {
        element.textContent = '';
    });
}

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validatePhoneNumber(phoneNumber) {
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phoneNumber);
}