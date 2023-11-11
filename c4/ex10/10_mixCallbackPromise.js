// Original function using a callback pattern
function fetchDataWithCallback(callback) {
    setTimeout(() => {
      const data = 'Data from callback function';
      callback(null, data);
    }, 1000);
  }
  
  // Wrapper function that returns a Promise
  function fetchDataWithPromise() {
    return new Promise((resolve, reject) => {
      fetchDataWithCallback((error, data) => {
        if (error) {
          reject(error);
        } else {
          resolve(data);
        }
      });
    });
  }
  
  // Usage with callback pattern
  fetchDataWithCallback((error, data) => {
    if (error) {
      console.error('Callback pattern error:', error);
    } else {
      console.log('Callback pattern data:', data);
    }
  });
  
  // Usage with Promise pattern
  fetchDataWithPromise()
    .then((data) => {
      console.log('Promise pattern data:', data);
    })
    .catch((error) => {
      console.error('Promise pattern error:', error);
    });
  