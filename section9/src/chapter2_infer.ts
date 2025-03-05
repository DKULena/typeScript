/**
 * infer (inference: 추론)
 * 조건부 타입에서 특정 타입만 추론하는 타입
 */

type FuncA = () => string;
type FuncB = () => number;

type ReturnType<T> = T extends () => infer R ? R : never;

type A = ReturnType<FuncA> // string

type B = ReturnType<FuncB> // never

/**
 * infer R === R
 * A
 * () => string          extends          () => R 로 비교
 * R을 참으로 만드려 추론하는 infer
 * 
 * Q. FuncA 에 리턴 타입을 'a'와 같은 스트링 리터럴 타입으로 해도 상위 타입인 string이 아니라
 * 'a'타입으로 변함
 */


type C = ReturnType<number> // never -> type R 추론 불가

/**
 * 예제
 */

// type PromiseUnpack<T> = any;
// 1. T는 Promise타입이어야 한다.
// 2. 프로미스 타입의 결과값 타입을 반환해야 한다.

type PromiseUnpack<T> = T extends Promise<infer R> ? R : never;

type PromiseA = PromiseUnpack<Promise<number>>;
// number

type PromiseB = PromiseUnpack<Promise<string>>;
// string