/**
 * 타입 단언(Type Assertion)
 * 값을 타입으로 바꾸는 것이 아닌 눈을 잠깐 가리는 것
 */
let person = {}; // Person 으로 단언 <- 타입 단언 person as Person
person.name = "이정환";
person.age = 27;
let dog = {
    name: "돌돌이",
    color: "brown",
    breed: "진도"
};
/**
 * 타입 단언의 규칙
 * 값 as 단언 <- 단언식
 * A as B
 * A가 B의 슈퍼타입이거나
 * A가 B의 서브타입이어야 함
 */
let num1 = 10;
let num2 = 10;
// let num3 = 10 as string
/* 'number' 형식을 'string'형식으로 변환한 작업은 실수일 수 있습니다.
두 형식은 서로 충분히 겹치지 않기 때문입니다.
의도적으로 변환한 경우에는 먼저 'unknown'으로 식을 변환합니다. */
let num3 = 10; // 좋은 방법은 아님, 다중 단언
/**
 * const 단언
 */
let num4 = 10; // number literal로 단언
let cat = {
    name: "야옹이",
    color: "yellow"
}; // readonly 객체 추론
let post = {
    title: "게시글1",
    author: "이정환"
};
// const len: number = post.author?.length // 옵셔널 체이닝: null이나 undefined일 경우
const len = post.author.length; // null, undefined아니라고 단언
export {};
