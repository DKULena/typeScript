/**
 * 서로소 유니온 타입
 * 교집합이 없는 타입들로만 만든 유니온 타입
 */
// Admin -> {name}님 현재까지 {kickCount}명 강퇴했습니다.
// Member -> {name}님 현재까지 {point}모았습니다.
// Guest -> {name}님 현재까지 {visitCount}번 오셨습니다.
function loginBad(user) {
    if ("kickCount" in user) {
        // admin 타입
        user; // Admin
        console.log(`${user.name}님 현재까지 ${user.kickCount}명 강퇴했습니다.`);
    }
    else if ("point" in user) {
        // menber 타입
        user; // Member
        console.log(`${user.name}님 현재까지 ${user.point}모았습니다.`);
    }
    else {
        // guest 타입
        user; // Guest
        console.log(`${user.name}님 현재까지 ${user.visitCount}번 오셨습니다.`);
    }
}
function login(user) {
    switch (user.tag) {
        case "ADMIN":
            console.log(`${user.name}님 현재까지 ${user.kickCount}명 강퇴했습니다.`);
            break;
        case "MEMBER":
            console.log(`${user.name}님 현재까지 ${user.point}모았습니다.`);
            break;
        case "GUEST":
            console.log(`${user.name}님 현재까지 ${user.visitCount}번 오셨습니다.`);
            break;
    }
    //   if (user.tag === "ADMIN") {
    //     console.log(`${user.name}님 현재까지 ${user.kickCount}명 강퇴했습니다.`);
    //   } else if (user.tag === "MEMBER") {
    //     console.log(`${user.name}님 현재까지 ${user.point}모았습니다.`);
    //   } else {
    //     console.log(`${user.name}님 현재까지 ${user.visitCount}번 오셨습니다.`);
    //   }
}
login({
    tag: "ADMIN",
    name: "이정환",
    kickCount: 10
});
export {};
