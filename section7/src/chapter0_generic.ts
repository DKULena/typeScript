/**
 * 제네릭(generic -> 일반적인, 포괄적인) -> general
 */

function func(value: unknown) {
    return value;
}

let num = func(1);
// num.toUpperCase(); // num은 unknown 형식입니다.
// num.toFixed(); // num은 unknown 형식입니다.
let bool = func(true);
let str = func("string")

// 인수로 num타입 -> 반환값 num
// 인수로 str타입 -> 반환값 str
// 인수로 bool타입 -> 반환값 bool
// ->> 제네릭 함수

function genericFunc<T>(value: T): T { // -> T 타입을 저장하는 변수(타입 변수)
    return value;
}
// 함수를 호출할 때 결정됨
let G_num = genericFunc(10);
let G_bool = genericFunc(true);
let G_str = genericFunc("String");
let G_arr = genericFunc([1, 2, 3])
let G_arrTupleType = genericFunc([1, 2, 3] as [number, number, number])
let G_arrTupleType2 = genericFunc(<[number, number, number]>[1, 2, 3])