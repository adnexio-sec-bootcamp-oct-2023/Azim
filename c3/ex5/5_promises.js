// Handle Promise Rejection
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        resolve("Promise resolved with value: " + randomNumber);
      } else {
        reject("Promise rejected with value: " + randomNumber);
      }
    }, 1000); 
  });
  
  promise
    .then((result) => {
      console.log("Fulfilled:", result);
    })
    .catch((error) => {
      console.error("Rejected:", error);
    });
  
    // Chainning Promises
    function delay(ms) {
        return new Promise(function(resolve) {
          setTimeout(resolve, ms);
        });
      }
      
      delay(1000)
        .then(function() {
          console.log("1 second has passed."); // Output: 1 second has passed.
          return delay(2000);
        })
        .then(function() { 
          console.log("3 seconds have passed in total."); // Output: 3 seconds have passed in total.
        });