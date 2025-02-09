/**
 * 대수 타입
 * -> 여러개의 타입을 합성해서 새롭게 만들어낸 타입
 * -> 합집합 타입과 교집합 타입이 존재
*/

/**
 * 1. 합집합 - Union 타입
 */

let a: string | number; // string, number 유니온 타입
a = 10;
a = 'hello';

let b : boolean | string | number; // |(바)를 넣을 수 있는 개수는 무한대

let arr: (number | string | boolean)[] = [1, "hello", true];

// 객체 타입 유니온 타입

type Dog = {
    name: string,
    color: string
}
type Person = {
    name: string,
    language: string
}

type Union1 = Dog | Person // 유니온 타입

let union1 : Union1 = {
    name: "",
    color: "",
}

let union2 : Union1 = {
    name:"",
    language: ""
}

let union3: Union1 = {
    name:"",
    color:"",
    language:""
}

// let union4: Union1 = {
//     name:""
// }
/**
 * Dog :    name, color
 * Person : name, language
 * 
 * union4는 어느 하나에도 포함되지 않음
 */

/**
 * 2. 교집합 타입 - Intersection 타입
 */

let variable: number & string; // never

type Dog2 = {
    name: string,
    color: string
}
type Person2 = {
    name: string,
    language: string
}

type Intersection = Dog2 & Person2;

let intersection1: Intersection = {
    name:"",
    color: "",
    language: ""
}
// 전부 포함