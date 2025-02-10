/**
 * 타입 추론 (Type Inference)
 * 1. 일반 변수 선언
 */
// 1. 일반 변수 선언
let a = 10;
let b = "hello";
let c = {
    id: 1,
    name: "이정환",
    profile: {
        nickname: "winterlood",
    },
    urls: ["https://winterlood.com"]
};
let { id, name, profile } = c;
let [one, two, three] = [1, "hello", true];
// function func() {
//     return "hello";
// }
function func(message = "hello") {
    return "hello";
}
// 2. any타입 진화(암묵적 any 타입)
let d; // any
d = 10;
d.toFixed(); // number로 타입 추론
//d.toUpperCase() // 'number' 형식에 'toUpperCase' 속성이 없습니다.
d = "hello";
d; // string
d.toUpperCase();
// d.toFixed() // 'toFixed' 속성이 'string'형식에 없습니다.
// 3. const
const num = 10; // number literal : 10
const str = "hello"; // string literal :"hello"
let arr = [1, "string"]; // 유니온 타입 (number | string)
export {};
