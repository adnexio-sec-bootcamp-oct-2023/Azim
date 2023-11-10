// Function that returns a promise that resolves after a specified duration
function createPromiseWithDelay(duration) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, duration);
    });
  }
  
  // Create async function to execute promises sequentially
  async function executeSequentially() {
    try {
      await createPromiseWithDelay(2000); // Resolves after 2 seconds
      console.log('Task 1 completed after 2 seconds');
      
      await createPromiseWithDelay(4000); // Resolves after 4 seconds
      console.log('Task 2 completed after 4 seconds');
      
      await createPromiseWithDelay(6000); // Resolves after 6 seconds
      console.log('Task 3 completed after 6 seconds');
    } catch (error) {
      console.error('Error:', error);
    }
  }
  
  // Call the async function to execute promises sequentially
  executeSequentially();
  