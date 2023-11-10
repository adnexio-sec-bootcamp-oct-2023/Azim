// Function that returns a promise that resolves after a specified duration
function createPromiseWithDelay(duration) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, duration);
    });
  }
  
  // Create promises with different durations
  const promise1 = createPromiseWithDelay(2000); // Resolves after 2 seconds
  const promise2 = createPromiseWithDelay(4000); // Resolves after 4 seconds
  const promise3 = createPromiseWithDelay(6000); // Resolves after 6 seconds
  
  // Chain the promises to execute in sequence
  promise1
    .then(() => {
      console.log('Task 1 completed after 2 seconds');
      return promise2;
    })
    .then(() => {
      console.log('Task 2 completed after 4 seconds');
      return promise3;
    })
    .then(() => {
      console.log('Task 3 completed after 6 seconds');
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  