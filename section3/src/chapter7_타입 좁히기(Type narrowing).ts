/**
 * Type narrowing (타입 좁히기)
 * 조건문 등을 이용해 넓은 타입에서 좁은 타입으로
 * 타입을 상황에 따라 좁히는 방법
 */

// value => number : toFixed
// value => string : toUpperCase
function func(value: number | string) {
  value;
  // value.toUpperCase() // 'string | number' 형식에 'toUpperCase' 속성이 없습니다.
  // value.toFixed() //  'number' 형식에 'toUpperCase' 속성이 없습니다.
  if (typeof value === "number") {
    // 타입 가드
    console.log(value.toFixed());
  } else if (typeof value === "string") {
    console.log(value.toUpperCase());
  }
}

// func('dsandskads');
// func(23.1321);

// value => Date: getTime
function func2(value: number | string | Date | null) {
  value;
  if (typeof value === "number") {
    console.log(value.toFixed());
  } else if (typeof value === "string") {
    console.log(value.toUpperCase());
  }
  // else if (typeof value === 'object') {
  //     // console.log(value.getTime()) // Date || null
  // }
  else if (value instanceof Date) {
    console.log(value.getTime());
  }
}

type Person = {
  name: string;
  age: number;
};

function func3(value: number | string | Date | null | Person) {
  value;
  if (typeof value === "number") {
    console.log(value.toFixed());
  } else if (typeof value === "string") {
    console.log(value.toUpperCase());
  } else if (value instanceof Date) {
    console.log(value.getTime());
  }
  // else if (value instanceof Person) { // instanceof: 클래스에만 사용 가능

  // }
  else if (value && "age" in value) {
    console.log(`${value.name}은 ${value.age}살 입니다.`);
  }
}

func3({ name: "이정환", age: 19 });