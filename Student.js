class Student {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    fullName() {
        console.log(`${this.firstName} ${this.lastName}`);
    }
    get firstName1() {
        return this.firstName;
    }
    set firstName1(name) {
        this.firstName = name;
    }
}
let stud = new Student('Uma Mahesh', 'Kondapalli');
stud.fullName();//Uma Mahesh Kondapalli
console.log(stud.firstName1);//Uma Mahesh
stud.firstName1='ABCD';
console.log(stud.firstName1);//ABCD