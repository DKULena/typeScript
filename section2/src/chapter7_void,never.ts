// void
// void -> 공허 -> 아무것도 없다 -> 아무것도 없음을 의미하는 타입

const func1 = (): string => {
    return "hello";
}

const func2 = (): void => {
    console.log("hello")
}

let a: void;
/*
a = 1;
a = "hello";
a = {};
*/
a = undefined;
// a = null; // -> strictNullChecks: false -> void타입 허용

// 아무것도 없는 값 -> undefined || null
// null이나 undefined는 반환값이 해당타입이라는 것을 명시해줘야 함
// void는 왜? -> 

const undfunc = (): undefined => {
    console.log("1");
}
const undfunc2 = (): undefined => {
    console.log("1");
    return;
}
const undfunc3 = (): undefined => {
    console.log("1");
    return undefined
}

// null이나 undefined는 반환값이 해당타입이라는 것을 명시해줘야 함
/**
 * 함수에서 undefined를 반환하는 경우
 * 1. return문이 없을 때
 * 2. return;
 * 3. return undefined 로 반환값을 undefined로 명시할 때
 */
// undefined도 명시하지 않았을 때 undefined로 추론하는데 차이는?

const voidFunc = ():void => {
    console.log("hello")
}

// never -> 존재하지 않는 -> 불가능한 타입
//  반환값 자체가 있는 것(void, undefined, null 도 반환값임)이 모순이다
const neverFunc = (): never => {
    while (true) { }
}

const neverFunc2 = (): never => {
    throw new Error();
}

// never타입은 정말 아무런 타입에도 할당할 수 없다