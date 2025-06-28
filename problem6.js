"use strict";
{
    //
    //Write a TypeScript function that takes a parameter of type unknown and uses a type guard to check whether the parameter is an array of numbers. If it is, calculate the sum of the numbers and log it. If it's not, log an error message.
    const checkType = (input) => {
        if (Array.isArray(input)) {
            const items = input.every(item => typeof item === 'number');
            if (items) {
                let total = 0;
                for (const item of input) {
                    total += item;
                }
                console.log(total);
            }
            else {
                console.log('Array has non-numbers items');
            }
        }
        else {
            console.log('Please input an array');
        }
    };
    const result = checkType([1, 2, 3, 4]);
    console.log(result);
    //
}
