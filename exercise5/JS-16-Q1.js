// ? why event bubbling is bad and how can we prevent it?

// ! Answers ======================================
// it can sometimes lead to undesirable behavior. This is particularly true when you have event listeners on multiple levels of the DOM hierarchy.

// to prevent event bubbling, we can use the stopPropagation() or stopImmediatePropagation()

// answer:

// ❓ Why is event bubbling sometimes bad?
// Event bubbling means that when an event occurs on a nested element (like a <button> inside a <div>), it first runs the handler on the target element, then "bubbles up" the DOM tree and triggers event handlers on its ancestors (like the <div> and then <body>, etc.).

// This can be bad when:

// You have event listeners at multiple levels (e.g. both on a button and its parent div), and a click on the button unintentionally triggers the parent’s handler.

// It causes unexpected behavior or duplicate logic (e.g. both the child and parent doing similar things).

// It becomes hard to debug or control what's firing when.

// 🛑 How to Prevent Event Bubbling:
// You can stop an event from bubbling up using:

// event.stopPropagation()

// Stops the event from bubbling up to parent elements.

// The parent event handler won’t run.

// event.stopImmediatePropagation()

// Stops bubbling and prevents other handlers of the same event on the same element from running.

// ✅ Example:
// html
// Copy
// Edit
// <div id="parent">
//   <button id="child">Click me</button>
// </div>
// javascript
// Copy
// Edit
// document.getElementById("parent").addEventListener("click", () => {
//   console.log("Parent clicked!");
// });

// document.getElementById("child").addEventListener("click", (e) => {
//   e.stopPropagation(); // Prevents bubbling
//   console.log("Button clicked!");
// });
// Output:

// Clicking the button only logs "Button clicked!"

// Without stopPropagation(), it would log both "Button clicked!" and "Parent clicked!".