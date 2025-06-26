"use strict";
// Design a TypeScript function that takes a parameter of a union type (e.g., string | number). If it's a string, return its length. If it's a number, return the square of that number.
const processValue = (value) => {
    if (typeof value === 'string') {
        return value.length;
    }
    if (typeof value === 'number') {
        return (value * value);
    }
};
const stringResult = processValue('sazid');
const numberResult = processValue(5);
