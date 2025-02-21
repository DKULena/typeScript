/**
 * 서로소 유니온 타입
 * 교집합이 없는 타입들로만 만든 유니온 타입
 */

type AdminBad = {
  name: string;
  kickCount: number;
};

type MemberBad = {
  name: string;
  point: number;
};

type GuestBad = {
  name: string;
  visitCount: number;
};

type UserBad = AdminBad | MemberBad | GuestBad;

// Admin -> {name}님 현재까지 {kickCount}명 강퇴했습니다.
// Member -> {name}님 현재까지 {point}모았습니다.
// Guest -> {name}님 현재까지 {visitCount}번 오셨습니다.
function loginBad(user: UserBad) {
  if ("kickCount" in user) {
    // admin 타입
    user; // Admin
    console.log(`${user.name}님 현재까지 ${user.kickCount}명 강퇴했습니다.`);
  } else if ("point" in user) {
    // menber 타입
    user; // Member
    console.log(`${user.name}님 현재까지 ${user.point}모았습니다.`);
  } else {
    // guest 타입
    user; // Guest
    console.log(`${user.name}님 현재까지 ${user.visitCount}번 오셨습니다.`);
  }
}
// 직관적이지 않음

// 서로소 유니온 타입 적용
type Admin = {
  tag: "ADMIN";
  name: string;
  kickCount: number;
};

type Member = {
  tag: "MEMBER";
  name: string;
  point: number;
};

type Guest = {
  tag: "GUEST";
  name: string;
  visitCount: number;
};

type User = Admin | Member | Guest;

function login(user: User) {
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
login({
    tag: "MEMBER",
    name: "멤버",
    point: 1000
});
login({
    tag: "GUEST",
    name: "게스트",
    visitCount: 3
});

/**
 * 복습 겸 한 가지 더 사례
 * 비동기 작업의 결과를 처리하는 객체
 */

type LoadingTask = {
  state: "LOADING";
};

type FailedTask = {
  state: "FAILED";
  error: {
      message: string;
  };
};

type SuccessTask = {
  state: "SUCCESS";
  response: {
      data: string;
  };
};

type AsyncTask = LoadingTask | FailedTask | SuccessTask;

// type AsyncTask = {
//   state: "LOADING" | "FAILED" | "SUCCESS"; // 문자열 리터럴
//   error?: {
//     message: string;
//   };
//   response?: {
//     data: string;
//   };
// };

const processResult = (task: AsyncTask) => {
switch (task.state) {
  case "LOADING":
    console.log("로딩중");
    break;
  case "FAILED":
    console.log(`에러 발생: ${task.error.message}`);
    break;
  case "SUCCESS":
    console.log(`성공: ${task.response.data}`);
    break;
}
};

const loading: AsyncTask = {
state: "LOADING",
};

const failed: AsyncTask = {
state: "FAILED",
error: {
  message: "요류 발생 원인은 ~~",
},
};

const success: AsyncTask = {
state: "SUCCESS",
response: {
  data: "데이터 ~~",
},
};
