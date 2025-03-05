/**
 * 분산적인 조건부 타입
 */

type StringNumberSwitch<T> = [T] extends [number] ? string : number; // -> [] 씌어서 분산 방지

let a: StringNumberSwitch<number> // string
let b: StringNumberSwitch<string> // number

let c: StringNumberSwitch<number | string>

let d: StringNumberSwitch<boolean | number | string>
// 1단계
//  1. StringNumberSwitch<boolean> |
//  2. StringNumberSwitch<number> |
//  3. StringNumberSwitch<string>

// 2단계
// number
// string
// number

// 결과
//  number | string | number => number | string

// 실용적인 예제

type Exclude<T, U> = T extends U ? never : T;
/**
 * 타입 변수 T가 타입 변수 U에 서브타입이라면 never
 * 아니라면 T
 * 
 * if
 * T = number, U = string
 * number extends string -> false -> T:number
 */

type A = Exclude<number | string | boolean, string>
/**
 * 1단계
 * T => 분산적 조건부 타입 T=> number | string | boolean
 * Exclude<number, string> |
 * Exclude<string, string> |
 * Exclude<boolean, string> |
 * 
 * 2단계
 * 1. number |
 * 2. never |
 * 3. boolean
 * 
 * 결과
 * => number | never | boolean
 * 유니온타입에 never타입은 사라짐
 * => number | boolean
 */

// Case2.

type Extract<T, U> = T extends U ? T : never;

type B = Extract<number | string | boolean, string>

/**
 * never |
 * string | 
 * never
 * never | string | never
 * => string
 */