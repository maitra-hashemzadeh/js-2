// ?Question-3:follow these steps:
// todo-1:select "ul" element with "navbar" class.
// todo-2:add the items of the navbarItem array to the "ul" element by appending them as <li> elements.
// todo-3:Add the class "item" to each <li> element.
// todo-4:Edit the <li> tags according to the image.(You can check the help folder or use the following style for each <li> element)
/**
  {
    margin: 0 1rem;
    cursor: pointer;
  }
*/
// !Answer:
const navbarItem = ["Home", "Products", "Blog", "Contact us"];

// todo-1
const navbar = document.querySelector(".navbar")
// todo-2&3
navbarItem.forEach(item => {
    const liTag = document.createElement("li");
    liTag.textContent = item;
    liTag.classList.add("item");
      liTag.style.margin = "0 1rem";
    liTag.style.cursor = "pointer";
    navbar.appendChild(liTag);
  });
