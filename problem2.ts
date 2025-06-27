{
    //
    interface Person {
        address?: {
            city: string,
            street: string
        },
        phone?: number
    }

    const getAddressCity = (person: Person) : string | number | undefined => {
        return person.address?.city;
    }


    const person1 = getAddressCity({
        address: {
            city: "Dhaka",
            street: 'link road'
        }
    })
    console.log(person1);
    const person2 = getAddressCity({});
    console.log(person2);
    //
}