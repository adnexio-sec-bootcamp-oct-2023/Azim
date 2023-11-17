// Multiline String
const poem = `
  The road not taken,
  Two roads diverged in a wood,
  And sorry I could not travel both...
`;
console.log(poem);

// Expressions in Template Literals
const a = 3;
const b = 8;
console.log(`The sum of ${a} and ${b} is ${a + b}.`);

// Template Literals in Function
function greet(name) {
    return `Hello, ${name}!`;
  }
  console.log(greet("Bob"));

// Escaping Backticks
const message = `She said, "Don't forget to use \``;
console.log(message);