function sumAll() {
    let sum = 0;

    for (let i =0; i < arguments.length; i++) {
        if (typeof arguments[i] === 'number') {
            sum += arguments[i];
        }
        else {
            console.log(`please input numbers only`);
        }
    }

    return sum;
  }
  
  console.log(sumAll(1, 2, 3, 4, 5)); 
  console.log(sumAll(10, 20, 30)); 
  console.log(sumAll('lala', 10)); 
  