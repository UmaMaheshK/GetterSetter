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
}
let stud = new Student('Uma Mahesh', 'Kondapalli');
stud.fullName();//Uma Mahesh Kondapalli
console.log(stud.firstName1);//Uma Mahesh
stud.firstName1 = 'ABCD';
console.log(stud.firstName1);//ABCD