/**
 * 타입 추론 (Type Inference)
 * 1. 일반 변수 선언
 */

// 1. 일반 변수 선언
let a = 10;
let b = "hello";
let c = {
    id: 1,
    name:"이정환",
    profile: {
        nickname: "winterlood",
    },
    urls: ["https://winterlood.com"]
}

let { id, name, profile } = c;

let [one, two, three] = [1, "hello", true];

// function func() {
//     return "hello";
// }
function func(message= "hello") {
    return "hello";
}

// 2. any타입 진화(암묵적 any 타입) / 명시적 any타입 (a:any)와는 다름
let d; // any
d = 10;
d.toFixed(); // number로 타입 추론
//d.toUpperCase() // 'number' 형식에 'toUpperCase' 속성이 없습니다.

d = "hello";
d // string
d.toUpperCase();
// d.toFixed() // 'toFixed' 속성이 'string'형식에 없습니다.

// 3. const (타입 리터럴)
const num = 10; // number literal : 10 -> const 상수이기 때문
const str = "hello" // string literal :"hello"

const arr = [1, "string"] // 유니온 타입 (number | string)
arr


const e = [1, 2, 3] as const;