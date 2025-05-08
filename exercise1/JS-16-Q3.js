// ? Qustion-3:Write a code to close message box when close button clicked :
// hint: watch help.mp4
//! answer

const messageSection = document.querySelector(".ri-close-line");

messageSection.addEventListener("click", closerMessageSection);

function closerMessageSection() {
  this.parentElement.style.visibility = "hidden";
}