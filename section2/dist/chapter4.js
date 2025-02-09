// 타입 별칭(Type Alias) && 인덱스 시그니처(Index Signature)
let QWER = {
    id: 1,
    name: "쵸단",
    group: "QWER",
    instrument: "드러머",
    role: "Q",
};
let QWER2 = {
    id: 2,
    name: "마젠타",
    group: "QWER",
    instrument: "베이트",
    role: "W",
};
let countryCodes = {
    Korea: 'ko',
    UnitedState: 'us',
    UnitedKingdom: 'uk',
};
let CountryNumberCodes = {
    Korea: 410,
    UnitedState: 840,
    UnitedKingdom: 826,
};
let CountryNumberCodes2 = {};
export {};
// 객체 내부에 값이 없어도 오류가 발생하지 않음 -> 규칙을 위반( [key: string] : number) 하지만 않으면 상관 없음
