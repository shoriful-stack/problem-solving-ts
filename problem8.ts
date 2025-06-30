{
    //

    // Create a TypeScript program that simulates a simple shopping cart. Define an interface Product with properties like name, price, and quantity. Implement a function that calculates the total cost of the items in the shopping cart. The function should take an array of Product objects as input and return the total cost.
    interface Cart{
        name: string,
        price: number,
        quantity: number
    }

    const calculateTotal = (cart: Cart[]): number =>{
        let total = 0;
        for(const item of cart){
            total += item.quantity * item.price;
        }
        return total
    }

    const totalCost = calculateTotal([{name: 'Watch', price: 2300, quantity: 3}, {name: 'Bike', price: 230000, quantity: 1}]);
    console.log(totalCost);
    //
}