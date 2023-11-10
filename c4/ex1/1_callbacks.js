function processData(arr, callback) {
    const doubledArray = [];
    for (let i = 0; i < arr.length; i++) {
        doubledArray.push(arr[i] * 2);
    }
    callback(doubledArray);
}

function sumArrayElements(arr) {
    //return arr.reduce((total, num) => total + num, 0);
    let sum = 0;
    /*arr.forEach((num) => {
        sum += num;
    });*/
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum;
}

const numbers = [1, 2, 3, 4, 5];

processData(numbers, (doubledArray) => {
    const total = sumArrayElements(doubledArray);
    console.log("Doubled Array:", doubledArray);
    console.log("Total:", total);
});