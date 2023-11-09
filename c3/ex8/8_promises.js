/*
Implement a fake API call using setTimeout that simulates fetching user data from a server. 
The function should return a promise. If the server returns data (simulated using a random 
condition), resolve the promise, otherwise reject it. Handle both the resolved and rejected 
promise gracefully.
*/
function fakeAPICall() {
    return new Promise((resolve, reject) => {
      const randomSuccess = Math.random() >= 0.5;
        //console.log(typeof(randomSuccess));
      setTimeout(() => { //This is like a delay, setTimeout(doThis, milliseconds);
        if (randomSuccess) {
          const userData = { id: 1, name: "John Doe" };
          resolve(userData); 
        } else {
          const errorMessage = "Failed to fetch user data from the server";
          reject(errorMessage);
        }
      }, 1000); 
    });
  }
  
  // Usage of the fakeAPICall function
  fakeAPICall()
    .then((userData) => {
      console.log("User data:", userData);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
  