/**
 * 인터페이스의 ( 확장 || 상속 )
 * 상속 받은 것들은 그대로 써옴
 * 뒤에 extends 가 있으면 부모요소(?)로 부터 다 받아온다 (재산, 빚 전부; 선택 안됨!!)
 * 타입이어도 확장 가능(객체 형태이기만 하면)
 */

interface Animal {
    name: string;
    age: number;
}

interface Dog extends Animal { //  name, age는 Animal 인터페이스로부터 받아온다
    name: "" // 동일한 프로퍼티에서는 받아올 수 있음(부모의 서브타입만 가능: 문자열>문자열 리터럴)
    isBark: boolean;
}

interface Cat extends Animal {
    isScratch: boolean;
}

interface Chicken extends Animal {
    isFly: boolean;
}
/**
 * name, age 중복
 */

const dog: Dog = {
    name: '',
    age: 15,
    isBark: true
}

interface DogCat extends Dog, Cat {
    name: "",
    age: number,
    isBark: boolean;
    // isScratch: boolean;
}