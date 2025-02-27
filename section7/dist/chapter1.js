/**
 * Case 1.
 */
// function swap<T, U>(a: T, b: U) {
//     return [b, a]
// }
// const [a, b] = swap(1, 2);
// 
const swapArrow = (a, b) => {
    return [b, a];
};
const [a, b] = swapArrow(2, "2");
console.log(b, a);
export {};
