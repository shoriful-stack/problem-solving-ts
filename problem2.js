"use strict";
{
    const getAddressCity = (person) => {
        var _a;
        return (_a = person.address) === null || _a === void 0 ? void 0 : _a.city;
    };
    const person1 = getAddressCity({
        address: {
            city: "Dhaka",
            street: 'link road'
        }
    });
    console.log(person1);
    const person2 = getAddressCity({});
    console.log(person2);
    //
}
