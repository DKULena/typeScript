/**
 * 인터페이스 (객체 타입 특화)
 * 타입과 다르게 유니온, 인터섹션 타입을 만들 수 없음
 */

interface Person {
    readonly name: string;
    age?: number;
    sayHi(): void
    sayHi(a: number, b: number): void
    // sayHi(): void
}

// const person: Person = {
//     name: "이성재",
//     age: 28,
// }
const personNoAge: Person = {
    name: "이성재",
    sayHi: function () {
        console.log("hi")
    }
}
// person.name = "이정환"

personNoAge.sayHi();
personNoAge.sayHi(1, 2);