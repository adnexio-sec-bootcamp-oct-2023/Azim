function findFibonacci(n) {
    if (n <= 0) {
      return 0;
    } else if (n === 1) {
      return 1;
    } else {
      return findFibonacci(n - 1) + findFibonacci(n - 2);
      // recursion
    }
  }
  
  const n = 9; 
  const result = findFibonacci(n);
  console.log(`The ${n}th Fibonacci number is: ${result}`);