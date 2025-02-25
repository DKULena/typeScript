/**
 * 선언 합침
 * 인터페이스는 별칭과 달리 동일한 이름에 인터페이스를 중복해도 상관 X
 * 합쳐지기 때문
 */

interface Person {
    name: string;
}

interface Person {
    age: number;
}

interface Developer extends Person {
    name: "hello";
}

const person: Person = {
    name: "",
    age: 1
}

/**
 * 모듈 보강
 */

interface Lib {
    a: number;
    b: number;
}

interface Lib {
    c: string;
}

const lib : Lib = {
    a: 1,
    b: 2,
    c: "hello"
}