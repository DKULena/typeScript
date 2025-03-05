/**
 * 조건부 타입
 */

type A = number extends string ? string : number;

// 슈퍼타입
type ObjA = {
  a: number;
};

// 서브타입
type ObjB = {
  a: number;
  b: number;
};

type B = ObjB extends ObjA ? number : string;

/**
 * 제네릭과 조건부 타입
 * 제네릭과 함께 조건부타입을 쓰면 타입을 가변적으로 쓰면서도 논리에 흐름에 따라서 타입을 바꿔줄 수 있다.
 */

type StringNumberSwitch<T> = T extends number ? string : number;

let varA: StringNumberSwitch<number>; // string

let varB: StringNumberSwitch<string>; // number

function removeSpaces<T>(text: T): T extends string ? string : undefined;
function removeSpaces(text: any) {
  if (typeof text === "string") {
    return text.replaceAll(" ", "") as any;
  } else {
    return undefined as any;
  }
}

let result = removeSpaces("one two three"); // string
result.toUpperCase();
console.log(result.toUpperCase())

let result2 = removeSpaces(undefined); // undefined