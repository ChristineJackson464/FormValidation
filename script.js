const form = document.getElementById('form');
const password1El = document.getElementById('password1');
const password2El = document.getElementById('password2');
const messageContainer = document.querySelector('.message-container');
const message = document.getElementById('message');

let isValid = false;
let passwordsMatch = false;

function validateForm() {
    // USING CONSTRAINT API
    isValid = form.checkValidity();
    // STYLE MAIN MESSAGE FOR AN ERROR
    if (!isValid) {
        message.textContent = 'Please fill out all fields.';
        message.style.color = 'red';
        messageContainer.style.borderColor = 'red';
        return;
    }    

    // CHECK FOR MATCHING PASSWORD
    if (password1El.value === password2El.value) {
        passwordsMatch = true;
        password1El.style.borderColor = 'green';
        password2El.style.borderColor = 'green';
    } else {
        passwordsMatch = false;
        message.textContent = 'Please make sure passwords match.';
        message.style.color = 'red';
        messageContainer.style.borderColor = 'red';
        password1El.style.borderColor = 'red';
        password2El.style.borderColor = 'red';
        return;
    }
    // IF FORM VALID AND PASSWORDS MATCH
    if (isValid && passwordsMatch) {
        message.textContent = 'Thank you. You are successfully registered!';
        message.style.color = 'green';
        messageContainer.style.borderColor = 'green';
    }
}

function storeFormData() {
    const user = {
        name: form.name.value,
        phone: form.phone.value, 
        email: form.email.value, 
        website: form.website.value, 
        password: form.password.value 
    };
    // DO SOMETHING W/ USER-DATA
    console.log(user);
}

function processFormData(e) {
    e.preventDefault();
    validateForm();
    //SUBMIT DATA IF VALID
    if (isValid && passwordsMatch) {
        storeFormData();
    };
}

// EVENT LISTENER
form.addEventListener('submit', processFormData);