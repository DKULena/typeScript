/**
 * 접근 제어자
 * access modifier
 * => public, private, protected
 */
class Employee {
    name;
    age;
    position;
    // 필드
    //   private name: string; // public name
    //   protected age: number; // public age
    //   public position: string; // public position
    // -> 생성자에서 접근 제어를 하면 필드를 자동으로 만들기 때문에 선언할 필요 없음
    // 생성자
    constructor(name, age, position) {
        this.name = name;
        this.age = age;
        this.position = position;
        // this.name = name;
        // this.age = age;
        // this.position = position;
        // 자동으로 할당됨
    }
    // 메서드
    work() {
        console.log(`${this.name}일함`);
    }
}
class ExecutiveOfficer extends Employee {
    // 필드
    officeNumber;
    // 생성자
    constructor(name, age, position, officeNumber) {
        super(name, age, position);
        this.officeNumber = officeNumber;
    }
    // 메서드
    func() {
        // this.name // name 속성은 private이며 Employee 클래스 내에서만 엑세스 할 수 있습니다.
        this.age; // protected는 하위 클래스에서 접근 가능
    }
}
const employee = new Employee("이정환", 27, "developer");
// employee.name = "홍길동"; // name 속성은 private이며 Employee 클래스 내에서만 엑세스할 수 있습니다.
// employee.age = 30; // age 속성은 보호된 속성이며 Employee 클래스 및 해당 하위 클래스 내에서만 엑세스 할 수 있습니다.
employee.position = "designer";
console.log(employee);
export {};
