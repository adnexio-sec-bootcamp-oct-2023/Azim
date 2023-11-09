(function () {
    function calculateFactorial(number) {
      if (number < 0) {
        console.log("Factorial is not defined for negative numbers.");
        return;
      }
  
      if (number === 0 || number === 1) {
        console.log(`The factorial of ${number} is 1`);
        return;
      }
  
      let factorial = 1;
      for (let i = 2; i <= number; i++) {
        factorial *= i;
      }
  
      console.log(`The factorial of ${number} is ${factorial}`);
    }
  
    calculateFactorial(7); 
    calculateFactorial(0); 
    calculateFactorial(-1); 

    
  })();
  
  
/*(function () {
    //code here
})()*/