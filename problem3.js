"use strict";
{
    //
    // Create a type guard function isCat that checks if an object is an instance of a Cat class. If it does, the function says "yes, it's a cat." If it doesn't match, the function says "no, it's not a cat."
    class Animal {
        constructor(name) {
            this.name = name;
        }
        makeSound() {
            console.log('no, it is not a cat');
        }
    }
    class Cat extends Animal {
        constructor(name) {
            super(name);
        }
        makeMeaow() {
            console.log('yes, it is a cat');
        }
    }
    const isCat = (animal) => {
        return animal instanceof Cat;
    };
    const checkCat = (animal) => {
        if (isCat(animal)) {
            animal.makeMeaow();
        }
        else {
            animal.makeSound();
        }
    };
    const cat = new Cat('Manikka');
    checkCat(cat);
    //
}
