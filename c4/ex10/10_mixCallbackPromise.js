/*
Create a function that uses a callback pattern. Then, wrap this function in another one that returns a promise. 
Demonstrate how the original callback function can now be used with both callback pattern and promise pattern, 
thanks to the wrapper.
*/

function fetchDataWithCallback(callback) {
    setTimeout(() => {
      const data = 'Data from callback function';
      callback(null, data);
    }, 1000);
  }
  
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
  
  fetchDataWithCallback((error, data) => {
    if (error) {
      console.error('Callback pattern error:', error);
    } else {
      console.log('Callback pattern data:', data);
    }
  });
  
  fetchDataWithPromise()
    .then((data) => {
      console.log('Promise pattern data:', data);
    })
    .catch((error) => {
      console.error('Promise pattern error:', error);
    });
  