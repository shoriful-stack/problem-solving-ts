{
    //

    // Create a type guard function isCat that checks if an object is an instance of a Cat class. If it does, the function says "yes, it's a cat." If it doesn't match, the function says "no, it's not a cat."
    
    class Animal {
        name: string;

        constructor(name: string) {
            this.name = name;
        }

        makeSound() {
            console.log('no, it is not a cat');
        }
    }

    class Cat extends Animal {
        constructor(name: string) {
            super(name);
        }

        makeMeaow() {
            console.log('yes, it is a cat');
        }
    }

    const isCat = (animal: Animal) => {
        return animal instanceof Cat;
    }

    const checkCat = (animal: Animal) => {
        if (isCat(animal)) {
            animal.makeMeaow();
        } else {
            animal.makeSound();
        }
    }

    const cat = new Cat('Manikka');
    checkCat(cat);

    //
}