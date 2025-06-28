{
    //
    // Write a TypeScript function that takes a parameter of type unknown and uses a type guard to check whether the parameter is an array of numbers. If it is, calculate the sum of the numbers and log it. If it's not, log an error message.

    const checkType = (input: unknown) => {
        if(Array.isArray(input)){
            if(input.every(item => typeof item === 'number')){
                let total = 0;
                for(const item of input){
                    total += item;
                }
                console.log('Total sum', total);
            } else{
                console.log("The given array has non numbers");
            }
        } else{
            console.log('Please input an array');
        }
    }

    checkType([1, 2, 3, 4, 55]);
    checkType([1, 2, 3, 4, '55']);
    checkType('Hello')
    //
}