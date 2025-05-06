// ? Question-2:Write a function called "printPersons" that takes an array of persons and displays them on the screen.
const persons = [
    { name: "Alice", age: 18 },
    { name: "Bob", age: 21 },
    { name: "Charlie", age: 15 },
  ];
  
  function printPersons(persons) {
    const people = document.createElement("div");
  
    persons.forEach(person => {
      const pTag = document.createElement("p");
      pTag.innerText = `${person.name} is ${person.age} years old`;
      people.appendChild(pTag); 
    });
  
    document.body.appendChild(people);
  }
  printPersons(persons);