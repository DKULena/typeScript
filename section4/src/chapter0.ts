/**
 * 함수 타입 정의
 * 매개변수 (필수 매개변수, 선택적 매개변수 ?:)
 */

// 함수를 설명하는 가장 좋은 방법
// 어떤 매개변수를 받고, 어떤 결과값을 반환하는지 이야기
// 어떤 [타입의] 매겨변수를 받고, 어떤 [타입의] 결과값을 반환하는지 이야기

function func(a: number, b: number): number {
  return a + b;
}

/**
 * 화살표 함수의 타입을 정의하는 방법
 */

const add = (a: number, b: number): number => a + b;

/**
 * 함수의 매개변수
 */

function introduce(name = "이성재") {
  console.log(`name: ${name}`);
}

// introduce(1) // number 형식의 인수는 string 형식의 매개 변수에 할당할 수 없습니다.

function introduce1(name = "이성재", tall: number) {
  console.log(`name: ${name}`);
  console.log(`tall: ${tall}`);
}

introduce1("이성재", 165);
// introduce1("이성재"); // 2개의 인수가 필요한데 1개를 가져왔습니다. -> tall을 안 쓰고 싶다면 선택적 프로퍼티

// const optionalIntro = (name="이성재", tall?: number) => {
//     console.log(`name: ${name}`);
//     console.log(`tall: ${tall + 10}`); // tall은 undefined일 수 있습니다. (선택적 프로퍼티) ❌
// }

const optionalIntro = (name = "이성재", age: number, tall?: number) => { // 선택적 매개변수는 필수 매개변수 앞에 오면 ❌
  console.log(`name: ${name}`);
  if (typeof tall === "number") { // -> tall이 undefined가 아니라고 명시
    console.log(`tall: ${tall + 10}`);
  }
};

optionalIntro("이성재", 28, 165);
optionalIntro("이성재", 28);

// 개수 상관없이 매개변수를 넣기
// getSum(1, 2, 3), getSum(1, 2, 3, 4, 5, ...)
// rest 파라미터 -> 가변적인 길이의 인수를 전달하면 배열로


const getSum = (...rest: number[]) => {
    let sum = 0;
    rest.forEach((it) => sum += it)

    return sum;
}

console.log(getSum(1, 2, 3, 4, 5));