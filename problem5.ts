{
    //

    // Define two interfaces: Car with properties like make, model, and year, and Driver with properties like name and licenseNumber. Create a function that takes two objects of type Car and Driver and returns an object with the combined properties of both types.

    interface Car {
        make: string;
        model: string;
        year: number
    }

    interface Driver {
        name: string;
        licenseNumber: number
    }

    const assignDriver = (car: Car, driver: Driver) => {
        return {
            ...car,
            ...driver
        }
    }

    const myCar: Car = {
        make: 'Toyota',
        model: 'Corolla',
        year: 1976
    }

    const myDriver: Driver = {
        name: 'Helal',
        licenseNumber: 1827
    }

    const combined = assignDriver(myCar, myDriver);
    console.log(combined);
    //
}