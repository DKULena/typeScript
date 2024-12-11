// 배열
let numArr: number[] = [1, 2, 3];

let strArr: string[] = ['쵸단', '마젠타', '히나', '시연'];

// < > <- 제네릭 문법 (Generics)
let boolArr: Array<boolean> = [true, false, true];

// 배열에 들어가는 요소들의 타입이 다양할 경우
let multiArr: (number | string)[] = [1, "hello"];

// 다차원 배열의 타입을 정의하는 방법
// number[]의 []
let doubleArr: number[][] = [
    [1, 2, 3],
    [4, 5],
]

// 튜플
// 길이와 타입이 고정된 배열

/**
 * 튜플
 * 길이와 타입이 고정된 배열
 * JS로 컴파일 될 때는 배열로 변환되기 떄문에
 * push, pop 메서드를 사용해도 에러가 나지 않는다
 * 
 * 튜플: 요소를 추가하거나 제거하는 기능 사용 시 주의 
 */
let tup1: [number, number] = [1, 2];

let tup2: [number, string, boolean] = [1, "2", true];

tup2.push(10.2317231);

console.log(tup2);

// 튜플 사용 예시
const users: [string, number][] = [
    ["쵸단", 1],
    ["마젠타", 2],
    ["히나", 3],
    ["시연", 4],
    // [5, "김계란"], -> 순서 오류 방지
]

/**
 * 튜플을 사용하면 배열을 사용할 때 인덱스의 위치에 따라서 할당되는 값이
 * 정해져 있고, 순서를 지키는게 중요할 때 
 **/