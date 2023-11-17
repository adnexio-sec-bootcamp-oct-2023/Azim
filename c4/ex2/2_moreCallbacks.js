// Simulated user data
const userData = {
    id: 1,
    username: 'john_doe',
}

// Simulated user comments
const userComments = [
    { id: 101, text: 'Comment 1' },
    { id: 102, text: 'Comment 2' },
    { id: 103, text: 'Comment 3' },
];

// Simulated API function to fetch user details
function fetchUserDetails(userId, callback) {
    setTimeout(() => {
        const user = userData;
        if(user) {
            callback(null, user);
        }   else {
            callback('User not found', null);
        }
    }, 1000);
}

// Simulated API function to fetch user comments
function fetchUserComments(userId, callback) {
    setTimeout(() => {
        const comments = userComments;
        if(comments) {
            callback(null, comments);
        }   else {
            callback('Comments not found', null);
        }
    }, 1000);
}

// Example usage
const userId = 1;

// Fetch user details
fetchUserDetails(userId, (error, user) => {
    if (error) {
        console.error('Error fetching user details;:', error);
    }   else {
        console.log('User details:', user);

        // Fetch user comments after fetching user details
        fetchUserComments(userId, (error, comments) => {
            if (error) {
                console.error('Error fetching user comments:', error);
            }   else {
                console.log('User comments:', comments);
            }
        });
    }
});