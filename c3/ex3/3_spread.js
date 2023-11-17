// Combining Arrays
const array1 = [1, 2, 3];
const array2 = [4, 5];
const array3 = [6, 7, 8];
const combinedArray = [...array1, ...array2, ...array3];
//const combinedArray = array1.concat(array2, array3);
console.log(combinedArray); 

// Copying an Array
const originalArray = [1, 2, 3, 4, 5];
const shallowCopy = [...originalArray];
originalArray[0] = 10;
console.log("Original Array:", originalArray); 
console.log("Shallow Copy:", shallowCopy);    

// Spreading Elements in Function Arguments
function sumThreeNumbers(a, b, c) {
    return a + b + c;
}

let numbers = [2, 3, 4];
let result = sumThreeNumbers(...numbers);
console.log(result); 

// Spreading Object Properties
let obj1 = { name: 'Alice', age: 30 };
let obj2 = { ...obj1, city: 'New York' };
console.log(obj2);

// Cloning an Object with Nested Properties
let originalObject = { 
    name: 'John', 
    address: { 
        street: '123 Main St', 
        city: 'Anytown' 
    } 
};
let clonedObject = { 
    ...originalObject, 
    address: { ...originalObject.address } 
};
clonedObject.address.street = '456 Elm St';
console.log(originalObject.address.street); 
console.log(clonedObject.address.street); 