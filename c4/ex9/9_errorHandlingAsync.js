function simulateAPICall() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate a random outcome (resolve or reject)
        const randomOutcome = Math.random() < 0.5; // 50% chance of resolving
        if (randomOutcome) {
          resolve('Data from API');
        } else {
          reject('API Error');
        }
      }, 1000); // Simulate a 1-second delay
    });
  }
  
  // Async function that handles the API call with try-catch
  async function fetchData() {
    try {
      const data = await simulateAPICall();
      console.log('API call successful:', data);
    } catch (error) {
      console.error('API call failed with error:', error);
    }
  }
  
  // Call the async function to initiate the API call
  fetchData();
  