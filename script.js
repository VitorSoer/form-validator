const form = document.getElementById('form');
const message = document.getElementById('message');
const messageBox = document.getElementsByClassName('message-container');



let isValid = false;

function validateForm() {
    isValid = form.checkValidity();
    if (!isValid) {
        // Style main message for an error
        message.textContent = 'Please fill out all fields.';
        message.style.color = 'red';
        return;
    }

    if (isValid) {
        message.textContent = 'Success! ✅';
        message.style.color = 'green';
        message.style.visibility = 'visible';
    };
}

function storeData() {
    const user = {
        name: form.name.value,
        phone: form.phone.value,
        email: form.email.value,
        website: form.website.value,
        select: form.select.value
    };

    console.log(user);
}

function processFormData(e) {
    e.preventDefault();
    //Validate Form
    validateForm();
    if (isValid) {
        storeData();
    };

}

form.addEventListener('submit', processFormData);