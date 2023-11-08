// Arrow function with No Arguments
const greet = () => {
    console.log("Hello!");
};
greet();

// Arrow Function with a Single Argument
const double = (number) => {
    return number * 2;
};
console.log(double(10));

// Arrow Function as a Callback
const num = [1, 2, 3, 4, 5];
const doubledNumbers = num.map((number) => {
    return number * 2;
});
console.log(doubledNumbers);

// Arrow Function in a Higher-Order Function
function customHigherOrderFunction(array, callback) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
      result.push(callback(array[i]));
    }
    return result;
  }
  const triple = (number) => {
    return number * 3;
  };
  const numbers = [1, 2, 3, 4, 5];
  const tripledNumbers = customHigherOrderFunction(numbers, triple);
  console.log(tripledNumbers); 