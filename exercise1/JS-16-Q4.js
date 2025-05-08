// ? Qustion-4:Write a code that changes the background color of the stars when we click on them.
// hint: watch help.mp4
//! answer

const starsIcons = document.querySelectorAll(".stars i");

starsIcons.forEach((ele) => {
  ele.addEventListener("click", changerStarsColor);
});

function changerStarsColor() {
  this.classList.toggle("active");
}
