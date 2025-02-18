// 열거형 타입 (Enumerable Type)
// 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입
// 숫자형 Enum
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["USER"] = 1] = "USER";
    Role[Role["GUEST"] = 2] = "GUEST";
})(Role || (Role = {}));
/* 1. 숫자를 따로 할당하지 않아도 기본 인덱스 값처럼 0번부터 차례대로 할당
   2. 처음 값에 따라 뒤에 값도 올라감
   3. 중간 값부터 지정해주면 앞에는 그냥 0부터
*/
// 자료형 Enum
var Language;
(function (Language) {
    Language["korean"] = "ko";
    Language["english"] = "en";
})(Language || (Language = {}));
const user1 = {
    name: "이정환",
    // role : 0 // <- 관리자
    role: Role.ADMIN,
    language: Language.korean,
};
const user2 = {
    name: "이성재",
    // role : 1 // <- 유저
    role: Role.USER,
    language: Language.korean
};
const user3 = {
    name: "Kim아무개",
    // role : 2 // <- 게스트
    role: Role.GUEST,
    language: Language.english
};
console.log(user1, user2, user3);
export {};
// { name: '이정환', role: 0 } { name: '이성재', role: 1 } { name: '김아무개', role: 2 }
/**
 * TypeScript에 타입 관련된 코드들은 컴파일 시에 다 사라진다매여??
 *
 * 응~ Enum은 아니야~
 * (function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["USER"] = 1] = "USER";
    Role[Role["GUEST"] = 2] = "GUEST";
    })(Role || (Role = {}));
    와 같이 자바스크립트 객체로 변환되어 실행
 */ 
