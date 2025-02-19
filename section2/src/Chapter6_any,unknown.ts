// any
// 특정 변수의 타입을 우리가 모를때

let anyVar: any = 10;

let num: number = 10;
num = anyVar;
anyVar = num;

// unknown
let unknownVar: unknown;

unknownVar = ""; // string
unknownVar = 1; // number
unknownVar = () => { }; // object



// num = unknownVar // unknown 형식은 number 형식에 할당할 수 없습니다.

if (typeof unknownVar === "number" ) {
    num = unknownVar;
}