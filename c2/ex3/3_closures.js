// Closure: Function within a function

// Need to understand the layers of scope within a function

function createCounter() {
    let count = 0; 
  
    return {
      increment: function () {
        count++;
      },
      getValue: function () {
        return count;
      },
    };
  }
  const counter = createCounter();
  
  console.log(counter.getValue());
  counter.increment();
  console.log(counter.getValue());
  counter.increment();
  console.log(counter.getValue());
