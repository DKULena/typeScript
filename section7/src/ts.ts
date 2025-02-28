/*
[ 문제 소개 ]
다음 요구사항을 만족하는 func 함수의 타입을 정의하세요
- func 함수는 매개변수를 그대로 반환하는 함수입니다.
- 매개변수 value에는 모든 타입의 값이 들어올 수 있습니다.
- 반환값의 타입은 매개변수로 전달된 값의 타입과 같습니다.
  - ex) value의 값이 1일 경우 반환값은 number 타입입니다.
  - ex) value의 값이 'hi'일 경우 반환값은 string 타입입니다.
  - ex) value의 값이 [1,2]일 경우 반환값은 number[] 타입입니다.
*/

/* [Quiz] 아래의 코드를 수정하세요 */
// function func<T>(value: T): T { // -> T 타입을 저장하는 변수(타입 변수)
//     return value;
// }
// // 함수를 호출할 때 결정됨
// let G_num = func(10);
// let G_bool = func(true);
// let G_str = func("String");
// let G_arr = func([1, 2, 3])
// let G_arrTupleType = func([1, 2, 3] as [number, number, number])
// let G_arrTupleType2 = func(<[number, number, number]>[1, 2, 3])

// const func = <T>(value: T) => value

// // function func<T>(value: T): T {
// //     return value;
// // }

// let num = func(1);
// let str = func("hi");
// let arr = func([1, 2]);

// function getLastValue<T>(data: [...unknown[], T]): T {
//     return data[data.length - 1];
// }
  
// let a = getLastValue([1, 2, 3, 4, true]);
// console.log(a)

// function returnLastValue<T>(data: [...unknown[], T]) {
//     return data[data.length - 1] as T;
// }

// const returnLastValueArrow = <T>(data: [...unknown[], T]) => data[data.length - 1] as T;

// let num = returnLastValue([0, 1, 2]);
// // 0
// console.log(num)

// let str = returnLastValue(["hello", "mynameis"])
// // "hello"
// console.log(str)

// let union = returnLastValueArrow([1, "hello", "mynameis"])

function getLastValue<T>(data: [...unknown[], T]) {
    return data[data.length - 1] as T;
}
  