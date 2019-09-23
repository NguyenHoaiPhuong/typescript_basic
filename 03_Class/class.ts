// Person interface
interface IPerson {
    GetFirstName(): string;
    GetLastName(): string;
    GetFullName(): string;

    SetFirstName(firstName:string): void;
    SetLastName(lastName:string): void;
}

// Person class inherits the interface IPerson
class Person implements IPerson {
    // Properties
    firstName: string;
    lastName: string;

    // Methods
    GetFirstName(): string {
        return this.firstName;
    }
    GetLastName(): string {
        return this.lastName;
    }
    GetFullName(): string {
        return this.firstName + " " + this.lastName;
    }
    SetFirstName(firstName: string): void {
        this.firstName = firstName;
    }
    SetLastName(lastName: string): void {
        this.lastName = lastName;
    }

    Greeting(): string {
        return "Hi there";
    }
}

// Developer class inherits Person
class Developer extends Person {
    // Override function
    Greeting(): string {
        return "Hello world";
    }

    // super keyword
    GreetingLikeNormalPerson(): string {
        return super.Greeting();
    }
}

let akagi:Developer = new Developer();
akagi.SetFirstName("Nguyen")
akagi.SetLastName("Hoai Phuong")
console.log(akagi.GetFullName())
console.log(akagi.Greeting())
console.log(akagi.GreetingLikeNormalPerson())