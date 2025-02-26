/**
 * 클래스
 */
let studentA = {
    name: "이성재",
    grade: "A+",
    age: 28,
    study() {
        console.log("열심히 공부 함");
    },
    introduce() {
        console.log("안녕하세요!");
    }
};
// let studentB = {
//     name: "홍길동",
//     grade: "B-",
//     age: 28,
//     study() {
//         console.log("열심히 공부 함")
//     },
//     introduce() {
//         console.log("안녕하세요!")
//     }
// }
class Student {
    // 필드
    name;
    grade;
    age;
    // 메서드
    study() {
        console.log("열심히 공부 함");
    }
    introduce() {
        console.log(`안녕하세요 ${this.name}입니다.`);
    }
    // 생성자
    constructor(name, grade, age) {
        this.name = name;
        this.grade = grade;
        this.age = age;
    }
}
// 클래스를 이용해서 만든 객체 -> 인스턴스
// 스튜던트 인스턴스
let studentB = new Student("이정환", "A+", 28);
// console.log(studentB)
// studentB.study();
// studentB.introduce();
class StudentDeveloper {
    // 필드
    name;
    grade;
    age;
    favoriteSkill;
    // 생성자
    constructor(name, grade, age, favoriteSkill) {
        this.name = name;
        this.grade = grade;
        this.age = age;
        this.favoriteSkill = favoriteSkill;
    }
    // 메서드
    study() {
        console.log("열심히 공부 함");
    }
    introduce() {
        console.log(`안녕하세요 ${this.name}입니다.`);
    }
    programming() {
        console.log(`${this.favoriteSkill}로 프로그래밍 함`);
    }
}
const studentDeveloper = new StudentDeveloper("이성재", "B+", 28, "TypeScript");
// console.log(studentDeveloper);
// studentDeveloper.study();
// studentDeveloper.introduce();
// studentDeveloper.programming();
// 상속
class StudentDeveloper2 extends Student {
    // 필드
    favoriteSkill;
    // 생성자
    constructor(name, grade, age, favoriteSkill) {
        super(name, grade, age); // super로 부모 클래스에 생성자가 호출
        this.favoriteSkill = favoriteSkill;
    }
}
const stu2 = new StudentDeveloper2("이름", "평범", 20, "HTML");
console.log(stu2);
export {};
