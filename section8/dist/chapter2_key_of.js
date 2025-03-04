/**
 * keyof 연산자
 */
function getPropertyKey(person, key) {
    return person[key];
}
const person = {
    name: "이정환",
    age: 25,
};
getPropertyKey(person, "name");
function getKey(person2, key2) {
    return person2[key2];
}
const person2 = {
    name: "아무개",
    age: 21,
};
export {};
