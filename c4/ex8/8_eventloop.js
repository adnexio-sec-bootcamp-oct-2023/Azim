document.getElementById('myButton').addEventListener('click', () => {
    console.log('Button Clicked');
});

// Long-running while loop
let startTime = Date.now();
while (Date.now() - startTime < 5000) {
    // Simulate a long-running operation
}

console.log('While loop finished');