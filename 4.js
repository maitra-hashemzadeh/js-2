//? Question-4:Explain these things in the new EcmaScript standard with examples. (Explain in the form of an example.)
// todo:Using const, let instead of var
// todo:arrow function
// todo:template string instead of "" and ''
// todo:destructuring

// ✅ let و const به جای var

// ❌ قدیمی: var
var name = "Ali";
var name = "Reza"; // دوباره تعریف ممکن است

// ✅ جدید: let (برای مقدار متغیر)
let age = 25;
age = 26; // می‌توان مقدار را تغییر داد، اما دوباره تعریف نه
// let age = 30; ❌ خطا: دوباره تعریف نمی‌شود

// ✅ جدید: const (برای مقدار ثابت)
const PI = 3.14;
// PI = 3.14159; ❌ خطا: قابل تغییر نیست

// -------------------------------------------------------------------------------------------

// ✅ arrow function

// ❌ قدیمی
function add(a, b) {
  return a + b;
}

// ✅ جدید
const add = (a, b) => a + b;

// مثال دیگر
const sayHello = (name) => console.log(`Hello, ${name}!`);
sayHello("Sara"); // خروجی: Hello, Sara!

//   ---------------------------------------------------------------------------------------------

// ✅ backtick (`)

const name = "Ali";
const age = 20;

// ❌ قدیمی
const sentence1 = "My name is " + name + " and I am " + age + " years old.";

// ✅ جدید
const sentence2 = `My name is ${name} and I am ${age} years old.`;

// backtick
const multiLine = `
Name: ${name}
Age: ${age}
`;
console.log(multiLine);

// -----------------------------------------------------------------------------------------------\

// ✅  object distructuring
const numbers = [1, 2, 3];
const [first, second, third] = numbers;
console.log(first); // 1

// ✅  array distructuring
const user = {
  username: "maryam",
  age: 22,
  city: "Tehran",
};

const { username, city } = user;
console.log(username); // maryam
console.log(city); // Tehran
