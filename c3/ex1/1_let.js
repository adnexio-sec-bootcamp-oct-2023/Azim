// Using var in a nested block scope
// var is global
function varExample() {
    if (true) {
      var x = 10;
      console.log("Inside if block (var):", x);
    }
  
    console.log("Outside if block (var):", x);
  }
  
  varExample();
  
  // Using let in a nested block scope
  // let is local
  function letExample() {
    if (true) {
      let y = 20;
      console.log("Inside if block (let):", y);
    }
  
    // Uncommenting the line below would result in an error
    // console.log("Outside if block (let):", y);
  }
  
  letExample();
  
  // Using const in a nested block scope
  // const is local
  function constExample() {
    if (true) {
      const z = 30;
      console.log("Inside if block (const):", z);
    }
    // console.log("Outside if block (const):", z);
  }
  
  constExample();
  
// Loops and Block Scope
let x = 10;
for (let i = 0; i < 3; i++) {
    let x = i * 2; // Each iteration has its own 'x'
    console.log(x); // output: 0, 2, 4
}

console.log(x); // output: 10
