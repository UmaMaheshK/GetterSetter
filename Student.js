class Student {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    //Method
    fullName() {
        console.log(`${this.firstName} ${this.lastName}`);
    }
    //Getter
    get firstName1() {
        return this.firstName;
    }
    //Setter
    set firstName1(name) {
        this.firstName = name;
    }
    static upperCaseFullName() {
        this.firstName="firstName";
        this.lastName="lastName";
        let name = `${this.firstName} ${this.lastName}`;
        return `${name.toUpperCase()}`;
    }
}
let stud = new Student('Uma Mahesh', 'Kondapalli');
stud.fullName();//Uma Mahesh Kondapalli
console.log(stud.firstName1);//Uma Mahesh
stud.firstName1 = 'ABCD';
console.log(stud.firstName1);//ABCD
console.log(Student.upperCaseFullName());//FIRSTNAME LASTNAME
