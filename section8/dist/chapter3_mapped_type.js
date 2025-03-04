/**
 * 맵드 타입(Mapped Type) - 기존의 객체 타입을 기반으로 새로운 객체 타입을 만듬
 */
// 객체 타입을 조작하는 기능
// 한명의 유저 정보를 불러오는 기능
function fetchUser() {
    // ...기능
    return {
        id: 1,
        name: "이정환",
        age: 27,
    };
}
// 한명의 유저 정보를 수정하는 기능
function updateUser(user) {
    // ... 수정하는 기능
}
const user = fetchUser();
console.log(user);
updateUser({
    id: 1,
    name: "이정환",
    age: 25,
});
export {};
