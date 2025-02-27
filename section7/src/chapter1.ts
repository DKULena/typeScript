/**
 * Case 1.
 */

// function swap<T, U>(a: T, b: U) {
//     return [b, a]
// }
// const [a, b] = swap(1, 2);

//
const swapArrow = <T, U>(a: T, b: U) => {
  return [b, a];
};

const [a, b] = swapArrow(2, "3");

console.log(a, b);

/**
 * Case 2.
 */

function returnFirstValue<T>(data: [T, ...unknown[]]) {
    return data[0];
}

const returnFirstValueArrow = <T>(data: [T, ...unknown[]]) => data[0];

let num = returnFirstValue([0, 1, 2]);
// 0
console.log(num)

let str = returnFirstValue(["hello", "mynameis"])
// "hello"
console.log(str)

let union = returnFirstValueArrow([1, "hello", "mynameis"])
// union -> number

/**
 * Case 3. 다양한 타입
 */

interface InterfaceA {
    length: number;
}
interface InterfaceB extends InterfaceA {};

function getLength<T extends { length: number }>(data: T) {
    return data.length;
}

let var1 = getLength([1, 2, 3]); // 3
let var2 = getLength('123456'); // 6
let var3 = getLength({ length: 10}); // 10
// let var4 = getLength(10) // number 형식의 인수는 {length: number}형식의 매개 변수에 할당될 수 없습니다.
console.log(var1, var2, var3);
