function simulateAPICall() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const randomOutcome = Math.random() < 0.5; 
        if (randomOutcome) {
          resolve('Data from API');
        } else {
          reject('API Error');
        }
      }, 1000); 
    });
  }
  
  async function fetchData() {
    try {
      const data = await simulateAPICall();
      console.log('API call successful:', data);
    } catch (error) {
      console.error('API call failed with error:', error);
    }
  }
  
  fetchData();
  