/**
 * keyof 연산자
 */

interface Person {
    name: string;
    age: number;
}

function getPropertyKey(person: Person, key: keyof Person) {
    return person[key];
}

const person: Person = {
    name: "이정환",
    age: 25,
}

getPropertyKey(person, "name");

// typeof 연계
// ex. typeof person === 'object';

type Person2 = typeof person2;

function getKey(person2: Person2, key2: keyof typeof person2) {
    return person2[key2];
}

const person2 = {
    name: "아무개",
    age: 21,
}
