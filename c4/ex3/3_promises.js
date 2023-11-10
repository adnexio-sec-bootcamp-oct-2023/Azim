// Simulated user data
const userData = {
    id: 1,
    username: 'john_doe',
  };
  
  // Simulated user comments
  const userComments = [
    { id: 101, text: 'Comment 1' },
    { id: 102, text: 'Comment 2' },
    { id: 103, text: 'Comment 3' },
  ];
  
  // Simulated API function to fetch user details as a Promise
  function fetchUserDetails(userId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const user = userData;
        if (user) {
          resolve(user);
        } else {
          reject('User not found');
        }
      }, 1000);
    });
  }
  
  // Simulated API function to fetch user comments as a Promise
  function fetchUserComments(userId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const comments = userComments;
        if (comments) {
          resolve(comments);
        } else {
          reject('Comments not found');
        }
      }, 1000);
    });
  }
  
  // Example usage with Promises
  const userId = 1;
  
  fetchUserDetails(userId)
    .then((user) => {
      console.log('User details:', user);
      return fetchUserComments(userId);
    })
    .then((comments) => {
      console.log('User comments:', comments);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  