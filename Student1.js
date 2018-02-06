class Student {
    constructor(name) {
        this.name = name;
    }
    display() {
        console.log(this.name);
    }
    display1() {
        console.log(this.name + '  in Student');
    }
}
class Employee extends Student {
    display() {
        console.log(this.name);
    }
    display1() {
        super.display1();
        console.log(this.name + '  in Employee');
    }
}
let emp = new Employee('Uma Mahesh');
emp.display();//Uma Mahesh
emp.display1();//Uma Mahesh in in Student 
               //Uma Mahesh in Employee