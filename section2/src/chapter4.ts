// 타입 별칭(Type Alias) && 인덱스 시그니처(Index Signature)

/**
 * 타입 별칭 (Type Alias)
 * 타입을 변수처럼 정의해서 사용
 * 타입 별칭은 변수명(?) 이 중복되면 안됨
 * 근데 함수 스코프 내에서는 선언 가능
 */

/*
let QWER: {
    id: number,
    name: string,
    group: string,
    instrument: string,
    role: string,
} = {
    id: 1,
    name: '쵸단',
    group: "QWER",
    instrument: '드러머',
    role: 'Q'
}
    */

type QWER = { // 변수처럼 타입을 미리 지정해놓음
  id: number;
  name: string;
  group: string;
  instrument: string;
  role: string;
};

let QWER: QWER = {
  id: 1,
  name: "쵸단",
  group: "QWER",
  instrument: "드러머",
  role: "Q",
};

let QWER2: QWER = {
  id: 2,
  name: "마젠타",
  group: "QWER",
  instrument: "베이트",
  role: "W",
};

// 인덱스 시그니쳐 (Index Signature) : 객체 타입 정의를 좀 더 유연하게
type CountryCodes = {
    [key: string] : string
}

let countryCodes: CountryCodes = {
    Korea: 'ko',
    UnitedState: 'us',
    UnitedKingdom: 'uk',
}

type CountryNumberCodes = {
    [key: string] : number
}

let CountryNumberCodes: CountryNumberCodes = {
    Korea: 410,
    UnitedState: 840,
    UnitedKingdom: 826,
}

// 인덱스 시그니쳐 주의 점

type CountryNumberCodes2 = {
    [key: string] : number,
}

let CountryNumberCodes2: CountryNumberCodes2 = {}
// 객체 내부에 값이 없어도 오류가 발생하지 않음 -> 규칙을 위반( [key: string] : number) 하지만 않으면 상관 없음