/*
Name: Deasia Little
Class: CS601 
Assignment: Homework 1 November 2, 2024
*/


function validateNames() {


    // Retrieve values from form elements
    const firstNameValue = document.getElementById('first_name').value.trim();
    const lastNameValue = document.getElementById('last_name').value.trim();
    const emailValue = document.getElementById('email').value.trim();
    const packageValue = document.getElementById('package-select').value;
    const subscribeChecked = document.getElementById('subscribe').checked;

    const errorMessages = [
        // Collect validation checks and their corresponding messages
        { condition: firstNameValue === '', message: 'First name is empty. Please fill it out.' },
        { condition: firstNameValue.length < 2, message: 'First name must be at least 2 characters long.' },
        { condition: lastNameValue === '', message: 'Last name is empty. Please fill it out.' },
        { condition: lastNameValue.length < 2, message: 'Last name must be at least 2 characters long.' },
        { condition: emailValue !== '' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue), message: 'Please enter a valid email address.' },
        { condition: packageValue === '', message: 'Please select a package type.' },
        { condition: !subscribeChecked, message: 'You must subscribe to the newsletter to proceed.' }
    ];

    // Use filter to get all error messages that have a true condition
    const messages = errorMessages
        .filter(error => error.condition)
        .map(error => error.message); 

    // Display the error messages
    if (messages.length > 0) {
        alert(messages.join('\n'));
        return false; 
    }

    return true; 
}

document.getElementById('submit-btn').addEventListener('click', function() {
    const namesValid = validateNames();

    // If validation fails, return
    if (!namesValid) {
        return; 
    }

    // Retrieve values from form elements
    const firstNameValue = document.getElementById('first_name').value;
    const emailValue = document.getElementById('email').value;
    const packageValue = document.getElementById('package-select').value;
    const messageElement = document.getElementById('message');

    // Hide form elements and their labels
    const formElementIds = ['first_name', 'last_name', 'email', 'package-select', 'subscribe', 'submit-btn'];
    const labelIds = ['label_first_name', 'label_last_name', 'label_email', 'label_package', 'label_subscribe'];

    // Hide form elements
    formElementIds.map(id => {
        const element = document.getElementById(id);
        if (element) {
            element.style.display = 'none'; 
        }
    });

    // Hide labels
    labelIds.map(id => {
        const label = document.getElementById(id);
        if (label) {
            label.style.display = 'none'; 
        }
    });

    // Show success message in the div
    messageElement.style.display = 'block'; 
    messageElement.textContent = ''; 
    const successMessage = `Thank you, ${firstNameValue}, for subscribing! Your email ${emailValue} is registered with our ${packageValue} package.`;
    messageElement.textContent = successMessage;
});