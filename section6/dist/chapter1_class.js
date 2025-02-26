/**
 * 타입스크립트의 클래스
 */
const employee = {
    name: "이정환",
    age: 27,
    position: "developer",
    work() {
        console.log("일함");
    },
};
class Employee {
    name;
    age;
    position;
    // 생성자
    constructor(name, age, position) {
        this.name = name;
        this.age = age;
        this.position = position;
    }
    // 메서드
    work() {
        console.log("일함");
    }
}
const employeeB = new Employee("이정환", 27, "개발자");
console.log(employeeB);
employeeB.work();
const employeeC = {
    name: "",
    age: 0,
    position: "",
    work() { },
};
class ExecutiveOfficer extends Employee {
    // 필드
    officeNumber;
    // 생성자
    constructor(name, age, position, officeNumber) {
        super(name, age, position);
        this.officeNumber = officeNumber;
    }
}
export {};
