//? 5. Write a code to show if there are any truthy values in the array below
//? hint:use just one of this methods and pass the isTruthy function to that method
//? some(), every(), includes(), slice()
const array = ["0", null, "", 0];
function isTruthy(arr) {
  return arr.some(Boolean) // write your code here
}
console.log(isTruthy(array));
  
// !  Answer:

function isTruthy(num) {
  return num.some((element)=>Boolean(element))
}
console.log(isTruthy(array));


function isTruthy(str) {
  return Boolean(str)
}
console.log(array.some(isTruthy));
