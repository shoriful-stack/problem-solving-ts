// Design a TypeScript function that takes a parameter of a union type (e.g., string | number). If it's a string, return its length. If it's a number, return the square of that number.

const processValue = (value : string | number) : string |number | undefined =>{
    if(typeof value === 'string'){
        return value.length;
    }
    if(typeof value === 'number'){
        return value * value;
    }
}

const stringValue = processValue('sazid');
const numberValue = processValue(7);
console.log(stringValue);
console.log(numberValue);

