//! OPTIONAL
// ? Question-1:Using lexical scope, Write a function that displays the following outputs in order:
/**
 * Action
 * Potential
 * Signals
 */
// !Answer:
function outer() {
  let action = "Action";

  function middle() {
    let potentials = "Potential";

    function inner() {
      let signals = "Signal";
      console.log(action);
      console.log(potentials);
      console.log(signals);
    }
    return inner;
  }
  return middle;
}
myFunc = outer();
let myFunction = myFunc();
myFunction();

// ----------------------------------------------------------------

let aps = "Action";
function team() {
  let aps2 = "Potential";
  function teamWork() {
    let aps3 = "Signals";
    console.log(aps);
    console.log(aps2);
    console.log(aps3);
  }
  return teamWork;
}
let apsignals = team();
apsignals();
