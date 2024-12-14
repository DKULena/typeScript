// 객체
/**
 * 객체 타입은 user: object = {} (객체라고만 정의해주는 거)
 * 로 정의 하는게 아님
 * 이러면 프로퍼티(객체의 키값)접근이 안됌.
 * ❌ 잘못된 방법
 * ex) user.id <- 접근 안됨
 */

let user: { // 객체 리터럴 타입
    id: number,
    name: string,
} = {
    id: 1,
    name: "쵸단"
};
user.id;

/**
 * 타입스크립트 : 구조적 타입 시스템
 * 기타 언어(C, JAVA) : 명목적 타입 시스템
 */

// 있어도 되고 없어도 되는 프로퍼티 (옵셔널 프로퍼티) ?:
let user2: {
    id?: number,
    name: string
} = {
    // id 없어도 됨
    name: "마젠타"
}



// api key와 같이 프로퍼티나 메서드에 접근하게 해서는 안될때
let config : {
    readonly keyValue: string
} = {
    keyValue: 'very important api key'
}

// config.keyValue = 'changeable key value';
// Cannot assign to 'keyValue' because it is a read-only property.
