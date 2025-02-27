/**
 * map 메서드
 */

const arr = [1, 2, 3];

const newArr = arr.map(a => a * 2);

console.log(arr)
console.log(newArr)

function map<T, U>(arr: T[], callback: (item: T) => U) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(callback(arr[i]));
    }
    return result;
}

map(arr, (it) => it * 2);
// arr : str[] it : str
// arr : num[] it : num

map(['hi', 'hello'], (it) => parseInt(it));

// forEach -> 각 배열을 순회하는 메서드
let arr2 = [1, 2, 3];
arr2.forEach((it) => console.log(it));

function forEach<T>(arr: T[], callback: (item: T) => void) {
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i])
    }
}

forEach(arr2, (it) => {
    console.log(it.toFixed())
});

forEach(['123', '456'], (it) => {
    it;
})