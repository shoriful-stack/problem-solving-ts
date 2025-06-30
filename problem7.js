"use strict";
{
    //
    // Create a TypeScript function called findFirstOccurrence that accepts an array and a value to search for. Use generics to make the function work with arrays of any data type. Inside the function, find and return the index of the first occurrence of the value in the array. If the value is not found in the array, return -1 to indicate that. Create sample arrays of different data types (e.g., numbers, strings) and call the findFirstOccurrence function for each of them to display the results.
    const findFirstOccurrence = (arr, value) => {
        return arr.indexOf(value);
    };
    const numArray = [1, 2, 3, 4];
    const stringArray = ['banana', 'mango', 4, 'Honey'];
    console.log(findFirstOccurrence(numArray, 3));
    console.log(findFirstOccurrence(stringArray, 'Honey'));
    console.log(findFirstOccurrence(numArray, 33));
    console.log(findFirstOccurrence(stringArray, 'kola'));
    //
}
