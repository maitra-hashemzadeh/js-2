// ? Question-2:Select all spans  with the 'circle' class and write a code to change classes that have 'blue' with 'purple' and vice versa

// !Answer:
const spans = document.querySelectorAll(".circle");
spans.forEach(spanItem => {
  if (!spanItem.classList.contains("blue")) {
    spanItem.classList.remove("purple");
    spanItem.classList.add("purple");
  } else {
    spanItem.classList.remove("blue");
    spanItem.classList.add("blue");
  }
});