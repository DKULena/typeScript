/**
 * Exclude<T, U>
 * -> 제외하다, 추방하다
 * -> T에서 U를 제거하는 타입
 */

type Exclude<T, U> = T extends U ? never : T;
/**
 * 1 단계
 * Exclude<string, boolean>
 * Exclude<boolean, boolean>
 *
 * 2 단계
 * string extends boolean ? never : T -> string
 * boolean extends boolean ? never : T -> never
 * string | never => string (합집합에서 never는 공집합)
 */
type A = Exclude<string | boolean, boolean>;
// string | boolean에서 boolean을 제거 -> A: string

/**
 * Extract<T, U>
 * -> T에서 U를 추출
 */

type Extract<T, U> = T extends U ? T : never;

type B = Extract<string | boolean, boolean>; // boolean

/**
 * ReturnType<T>
 * -> 함수의 반환값 타입을 추출하는 타입
 */

type ReturnType<T extends (...args: any) => any> = T extends (
  ...args: any
) => infer R
  ? R
  : never;

function funcA() {
  return "hello";
}

function funcB() {
  return 10;
}

type ReturnA = ReturnType<typeof funcA>; // string
type ReturnB = ReturnType<typeof funcB>; // number
