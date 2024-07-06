// Custom email validation function
function validateEmail(email) {
    // Regular expression to match a basic email pattern
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email); // Returns true if the email matches the pattern
}
// Custom name validation function
function validateName(name) {
    // Regular expression to ensure name contains at least one letter, and is at least 5 characters long, containing only letters and spaces
    const re = /^(?=.*[a-zA-Z])([a-zA-Z ]{5,})$/;
    return re.test(name); // Returns true if the name matches the pattern
}
// Adding feedback dialogs for user interactions on name field blur event
document.getElementById('name').addEventListener('blur', function() {
    if (this.value === '') {
        // Alert if the name field is empty
        alert('Please enter your name.');
    } else if (!validateName(this.value)) {
        // Alert if the name does not pass validation
        if (/\d/.test(this.value)) {
            // Specific alert if name contains digits
            alert('Please enter alphabets and spaces only.');
        } else {
            // General alert for invalid name format
            alert('Name should be at least 5 characters and only contain letters and spaces.');
        }
    }
});
// Adding feedback dialogs for user interactions on email field blur event
document.getElementById('email').addEventListener('blur', function() {
    if (this.value === '') {
        // Alert if the email field is empty
        alert('Please enter your email.');
    } else if (!validateEmail(this.value)) {
        // Alert if the email does not pass validation
        alert('Please enter a valid email address.');
    }
});
// Form submission event with dialog boxes and custom validation
document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    const name = document.getElementById('name').value; // Get the value of the name field
    const email = document.getElementById('email').value; // Get the value of the email field
    
    // Validate the form fields before submission
    if (name === '' && email === '') {
        // Alert if both fields are empty
        alert('Please fill in the required fields before submitting the form.');
        return;
    }
    if (name === '') {
        // Alert if the name field is empty
        alert('Name is required.');
        return;
    }
    if (!validateName(name)) {
        // Alert if the name does not pass validation
        if (/\d/.test(name)) {
            // Specific alert if name contains digits
            alert('Please enter alphabets and spaces only.');
        } else {
            // General alert for invalid name format
            alert('Name should be at least 5 characters and only contain letters and spaces.');
        }
        return;
   }
    if (email === '') {
        // Alert if the email field is empty
        alert('Email is required.');
        return;
    }
    if (!validateEmail(email)) {
        // Alert if the email does not pass validation
        alert('Invalid email address.');
        return;
    }
    // Show success message and reset the form if all validations pass
    alert(`Thank you for signing up, ${name}!`);
    this.reset();
});
