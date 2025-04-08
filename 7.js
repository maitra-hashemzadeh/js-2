//? 7. Write a function to:
// todo1: find every item with more than 6 characters
// todo2: then check, if all of them have less than 10 characters return true, otherwise return false

const array = ["hello Jo", "fish", "birmingham", "periodic table", "phone"];
//!  Answer:
let characters = array.every((num) => {
  num.length > 6;
  if (num.length > 10) {
    return false;
  } else {
    return true;
  }
});
console.log(characters);

let char = array.filter((num) => {
    if (num > array.length) {
      return false;
    } else {
      return true;
    }
  });
console.log(char);
