interface Product {
    id: number;
    name: string;
    price: number;
    seller: {
      id: number;
      name: string;
      company: string;
    };
  }

  type Products = Product[];

  function getSellersFromProducts(products: Products): Product["seller"][] {
    return products.map((product) => product.seller);
}


// Quiz2
/*
[ 문제 소개 ]
다음 조건을 만족하는 3개의 타입을 추가로 정의하세요
- PartialProduct 타입은 Product 타입의 모든 프로퍼티를 다 선택적 프로퍼티로 바꾼 타입입니다.
- ReadonlyProduct 타입은 Product 타입의 모든 프로퍼티를 다 읽기 전용 프로퍼티로 바꾼 타입입니다.
- ReadonlyPartialProduct 타입은 Product 타입의 모든 프로퍼티를 다 선택적, 읽기 전용 프로퍼티로 바꾼 타입입니다.
*/

/* [Quiz] 아래의 코드를 수정하세요 */
interface Product {
  id: number;
  name: string;
  price: number;
  seller: {
    id: number;
    name: string;
    company: string;
  };
}

// keyof + 맵드 타입
// 1. keyof Product -> Product에 keyof는 "id" | "name" | "price" | "seller";
// 2. key in keyof Product -> [key in "id" | "name" | "price" | "seller"]
//  -> 각각에 키들을
// 3. Product[key] => 각 키(keyof Product)들의 타입

type PartialProduct = {
    [key in keyof Product] ?: Product[key]
};

type ReadonlyProduct = {
    readonly [key in keyof Product]: Product[key];
};

type ReadonlyPartialProduct = {
    readonly [key in keyof Product]?: Product[key]
};

/*
[ 문제 소개 ]
다음 조건을 만족하는 Score 타입을 구현하세요
- Score 타입은 점수를 나타내기 위한 문자열 타입으로 '${0부터 10까지의 정수}-${0부터 10까지의 정수}'형식을 갖습니다'
  - ex) "1-0", "3-2", "0-4" 이런 형태의 문자열 타입입니다.
  - ex) 어느쪽의 점수에도 두 자리수는 올 수 없습니다.
*/

/* [Quiz] 아래의 코드를 수정하세요 */
type Number = "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10";

type Score = `${Number}-${Number}`;

/* [Test] 여기부터는 정답을 체크하기 위한 용도로 수정하지 않습니다 */
const tc1 = "19-0";
const tc2 = "5-11";
const tc3 = "9-1";
const tc4 = "2-8";
const tc5 = "7-2";

// 0~10까지의 정수인데 19-0, 5-11과 같은 리터럴이 어떻게 가능한것인지?
