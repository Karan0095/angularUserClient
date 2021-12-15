export class User {

    id: number;
    lastName: string;
    firstName: string;
    age: number;
    gender: string;

    constructor(id: number, lastName: string, firstName: string, age: number, gender: string) {
        this.id = id;
        this.lastName = lastName;
        this.firstName = firstName;
        this.age = age;
        this.gender = gender;
    }
    
}