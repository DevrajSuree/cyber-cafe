// ============================
// Dev Cyber Cafe
// Aadhaar Services
// ============================

// Select all service buttons

const buttons = document.querySelectorAll(".card a");



// Click Event

buttons.forEach(button=>{

button.addEventListener("click",()=>{

console.log("Opening UIDAI Service...");

});

});



// Welcome Message

window.onload=()=>{

console.log("Welcome to Dev Cyber Cafe Aadhaar Services");

};