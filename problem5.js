"use strict";
{
    const assignDriver = (car, driver) => {
        return Object.assign(Object.assign({}, car), driver);
    };
    const myCar = {
        make: 'Toyota',
        model: 'Corolla',
        year: 1976
    };
    const myDriver = {
        name: 'Helal',
        licenseNumber: 1827
    };
    const combined = assignDriver(myCar, myDriver);
    console.log(combined);
    //
}
