// Your code goes here
// js
// Use the event's callback function to target the paragraph element 
// with id="text" and replace the text with "This is really cool!"

document.addEventListener("DOMContentLoaded", () => {
    console.log("After the DOM has loaded");
    text = document.querySelector('#text');
    text.textContent = "This is really cool!";
});

console.log(
    "This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
);