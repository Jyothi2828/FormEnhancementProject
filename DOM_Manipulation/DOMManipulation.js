// DOM_Manipulation/DOMManipulation.js

// Accessing elements
const nameInputById = document.getElementById('name');
const emailInputByTag = document.getElementsByTagName('input')[1];
const formByClass = document.getElementsByClassName('form-container')[0];
const submitButtonByName = document.getElementsByName('submit')[0];
const formBySelector = document.querySelector('#signup-form');

// Logging elements
// console.log('Accessed by ID:', nameInputById);
// console.log('Accessed by Tag:', emailInputByTag);
// console.log('Accessed by Class:', formByClass);
// console.log('Accessed by Name:', submitButtonByName);
// console.log('Accessed by Selector:', formBySelector);

//DOM Manipulation 
// Changing the placeholder text of the input element with a specific ID
nameInputById.placeholder = 'Enter your full name'; 
// Changing the placeholder text of the input element with a specific tag
emailInputByTag.placeholder = 'Enter your email address';
// Changing the background color of the form element with a specific class
formByClass.style.backgroundColor = '#e0f7fa'; 
// Changing the inner text of the button element with a specific name
submitButtonByName.innerText = 'Join Now'; 

