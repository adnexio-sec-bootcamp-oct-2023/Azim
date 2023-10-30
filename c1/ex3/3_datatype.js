/*
Create an array named mixedArray that contains at least five elements, 
each a different data type: string, number, boolean, object, and null. 
Use a loop to print the type of each element in the array.
*/

var mixedArray = ["Azim", 29, true, { brand: "Perodua", model: "Kancil" }, null];

for (var i = 0; i < mixedArray.length; i++) {
    var elementType = typeof mixedArray[i];
    console.log("Element at index " + i + " is of type: " + elementType);
}
