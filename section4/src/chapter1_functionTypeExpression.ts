/**
 * 함수 타입 표현식
 */

type Operation = (a: number, b: number) => number; //(매개변수 타입) => 반환값 타입

// const sub = (a: number, b: number) => a - b;
// const multiply = (a: number, b: number) => a * b;
// const divide = (a: number, b: number) => a / b;
const add: Operation = (a, b) => a + b;
const sub: Operation = (a, b) => a - b;
const multiply: Operation = (a, b) => a * b;
const divide: Operation = (a, b) => a / b;

/**
 * 호출 시그니쳐(콜 시그니쳐)
 */

type Operation2 = {
    (a: number, b: number): number;
    name: string; // + 하이브리드 타입
}

const add2: Operation2 = (a, b) => a + b;
const sub2: Operation2 = (a, b) => a - b;
const multiply2: Operation2 = (a, b) => a * b;
const divide2: Operation2 = (a, b) => a / b;

