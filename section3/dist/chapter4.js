/**
 * 대수 타입
 * -> 여러개의 타입을 합성해서 새롭게 만들어낸 타입
 * -> 합집합 타입과 교집합 타입이 존재
*/
/**
 * 1. 합집합 - Union 타입
 */
let a; // string, number 유니온 타입
a = 10;
a = 'hello';
let b; // |(바)를 넣을 수 있는 개수는 무한대
let arr = [1, "hello", true];
let union1 = {
    name: "",
    color: "",
};
let union2 = {
    name: "",
    language: ""
};
let union3 = {
    name: "",
    color: "",
    language: ""
};
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
let variable; // never
let intersection1 = {
    name: "",
    color: "",
    language: ""
};
export {};
// 전부 포함
