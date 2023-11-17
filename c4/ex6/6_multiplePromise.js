// Simulated API functions that return promises with delays
function fetchEndpoint1() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('Data from Endpoint 1');
      }, 2000);
    });
  }
  
  function fetchEndpoint2() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('Data from Endpoint 2');
      }, 3000);
    });
  }
  
  function fetchEndpoint3() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('Data from Endpoint 3');
      }, 1000);
    });
  }
  
  // Async function to fetch multiple endpoints simultaneously and process the results
  async function fetchAndProcessEndpoints() {
    try {
      const results = await Promise.all([
        fetchEndpoint1(),
        fetchEndpoint2(),
        fetchEndpoint3(),
      ]);
  
      // Process and log the results once all promises have resolved
      results.forEach((data, index) => {
        console.log(`Data from Endpoint ${index + 1}:`, data);
      });
    } catch (error) {
      console.error('Error:', error);
    }
  }
  
  // Call the async function to fetch and process endpoints
  fetchAndProcessEndpoints();
  