function processArray(arr, callback) {
    const result = [];
  
    for (let i = 0; i < arr.length; i++) {
      result.push(callback(arr[i])); 
      // Javascript Array push() method
    }
  
    return result;
  }
  
  function doubleValue(x) {
    return x * 4;
  }
  
  const inputArray = [1, 2, 3, 4, 5];
  const doubledArray = processArray(inputArray, doubleValue);
  console.log(doubledArray); 

  /*function greet(name, callback) {
    console.log('Hi ' + name);
    callback();
  }
  
  greet('John', function() {
    console.log('The callback function has been executed.');
  });*/
  