// interface Animal
interface IAnimal {
    Sound(): string
}

// Dog
class Dog implements IAnimal {
    constructor(private kind: string) {}

    Sound(): string {
        return this.kind + " sounds Go Go...";
    }    
}

// Cat
class Cat implements IAnimal {
    constructor(readonly kind: string) {}

    Sound(): string {
        return this.kind + " sounds Meo Meo...";
    }    
}

let mino: Dog = new Dog("Dog")
console.log(mino.Sound())

let miao: Cat = new Cat("Cat")
console.log(miao.Sound())