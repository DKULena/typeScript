/**
 * Unknown 타입
 */

function unknownExam() {
  // upcasting
  let num: unknown = 1;
  let str: unknown = "hello";
  let bool: unknown = true;
  let nullType: unknown = null;
  let undef: unknown = undefined;

  // downcasting
  let unknownVar: unknown;
  /*
    let num1: number = unknownVar // unknown형식은 number형식에 할당할 수 없습니다.
    let str1: string = unknownVar // unknown형식은 string형식에 할당할 수 없습니다.
    let bool1: boolean = unknownVar // unknown형식은 boolean형식에 할당할 수 없습니다.
  */
}

/**
 * Never 타입
 */

function neverExam() {
  function neverFunc(): never {
    while (true) {}
  }


  let numberVar: number = neverFunc();
  let stringVar: string = neverFunc();
  let booleanVar: boolean = neverFunc();
  
  // let never1: never = 10; // 10 형식은 never 형식에 할당할 수 없습니다.
  // let never2: never = "string"; // string 형식은 never 형식에 할당할 수 없습니다.
  // let never3: never = true; // true 형식은 never 형식에 할당할 수 없습니다.
}

/**
 * Void 타입
 */

function voidExam() {
  function voidFunc(): void {
    console.log("hi")
  }

  let voidVar: void = undefined;
}

/**
 * any 타입
 * 모든 타입이 (never 제외) 슈퍼, 서브 타입
 * (업캐스팅, 다운 캐스팅 가능)
 */

function anyExam() {
  let unknownVar: unknown;
  let anyVar: any;
  let undefinedVar: undefined;
  let neverVar: never;

  anyVar = unknownVar;
  undefinedVar = anyVar;

  undefinedVar = anyVar;

  // neverVar = anyVar
}