/**
 * 맵드 타입(Mapped Type) - 기존의 객체 타입을 기반으로 새로운 객체 타입을 만듬
 */
// 객체 타입을 조작하는 기능

interface User {
    id: number;
    name: string;
    age: number;
}

type PartialUser = {
    [key in 'id' | 'name' | 'age']?: User[key]; 
}

type BooleanUser = {
    [key in keyof User]: boolean;
}

type ReadonlyUser = {
    readonly [key in keyof User]: User[key];
}

// 한명의 유저 정보를 불러오는 기능
function fetchUser(): User {
    // ...기능
    return {
        id: 1,
        name: "이정환",
        age: 27,
    }
}

// 한명의 유저 정보를 수정하는 기능
function updateUser(user: PartialUser) {
    // ... 수정하는 기능
    return user;
}

const user = fetchUser()
// console.log(user) // output: { id: 1, name: '이정환', age: 27 }

updateUser({
    // id: 1,
    // name: "이정환",
    age: 25,
})


// console.log(updateUser({...user, age: 29}))

/**
 * 정리
 * mapped_type
 * 
 * // (key in ~~) -> key: value
// => ~~에 있는 키-> 이 키는 ~~를 담고 있어
 * 
 * 
 * 처음 User 인터페이스의 경우 3가지 프로퍼티(id, name, age)가 필수이기 때문 (fetchUser함수에서 전부 다 있어야 됨) (그래서 처음부터 optional로 지정하지 않음)
 * updateUser함수의 경우 모든 수정사항이 생기는 것이 아니기 때문에 선택적으로 수정할 수 있게끔 새로운 타입을 정의하여 지정
 * 여기서 새로운 타입을 일일히 만드는 것이 아니라 맵드타입으로 각 프로퍼티에 각 타입이 지정될 수 있게 끔 맵드 타입 사용,
 * 이후 선택적 프로퍼티로 있어도, 없어도 되게끔 바꿈
 * 
 * 내가 느낌 맵드 타입: 기존에 정의되어 있는 객체의 타입을 특정 (타입 | 상태)으로 일괄적으로 적용시키고 싶을 때
 * 
 * 궁금한 점:
 * 그냥 {...user, age: 28}와 같은 식으로 바꾸면 안되는 것인지... (너무 저 한 예제에 국한된 질문이긴 한데... 갑자기 생각나서)
 */