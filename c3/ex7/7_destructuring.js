// Array Destructuring
const numbers = [1, 2, 3];
const [first, second, third] = numbers;
console.log(first);
console.log(second);
console.log(third);

// Default Values
const person = { name1: 'John' };
const { name1, age1 = 30 } = person;
console.log(name1);
console.log(age1);

// Nested Object De-structuring
const user = {
    info: {
      name2: 'Alice',
      age: 28,
    },
    isAdmin: false,
  };
  const { info: { name2, age2 }, isAdmin } = user;
  console.log(name2);
  console.log(age2);
  console.log(isAdmin);

// Swapping Variables
let a = 5;
let b = 10;
[a, b] = [b, a];
console.log(a);
console.log(b);
