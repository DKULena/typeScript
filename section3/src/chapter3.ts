// 객체 타입의 호환성

/**
 * 기본 타입간의 호환성
 */

let num1: number = 10;
let num2: 10 = 10;
num1 = num2;

type Animal = {
  name: string;
  color: string;
};

type Dog = {
  name: string;
  color: string;
  breed: string;
};

let animal: Animal = {
  name: "기린",
  color: "yellow",
};

let dog: Dog = {
  name: "돌돌이",
  color: "brown",
  breed: "진도",
};

animal = dog; // 업 캐스팅

// dog = animal // 다운 캐스팅

// type Book = {
//     name: string,
//     price: number
// };

type ProgrammingBook = {
  name: string;
  price: number;
  skill: string;
};

let book: Book;
let programmingBook: ProgrammingBook = {
  name: "한 입 크기로 잘라먹는 리액트",
  price: 33000,
  skill: "reactjs",
};

book = programmingBook; // 업 케스팅
// programmingBook = book; // 다운 캐스팅

/**
 * 초과 프로퍼티 검사
 */

type Book = {
  name: string;
  price: number;
};

let book2: Book = {
  name: "한 입 크기로 잘라먹는 리액트",
  price: 33000,
  // skill: "reactjs",
};

let book3: Book = programmingBook;

function func(book: Book) {
  func({
    name: "한 입 크기로 잘라먹는 리액트",
    price: 33000,
    // skill: "reactjs",
  });
  func(programmingBook);
}
