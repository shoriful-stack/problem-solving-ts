"use strict";
{
    const calculateTotal = (cart) => {
        let total = 0;
        for (const item of cart) {
            total += item.quantity * item.price;
        }
        return total;
    };
    const totalCost = calculateTotal([{ name: 'Watch', price: 2300, quantity: 3 }, { name: 'Bike', price: 230000, quantity: 1 }]);
    console.log(totalCost);
    //
}
