/*
[ 문제 소개 ]
다음 요구사항을 만족하는 Pokemon 클래스를 완성하세요
- 다음 3개의 필드를 갖습니다.
  1. name 필드는 String 타입이며 Public입니다.
  2. skill 필드는 String 타입이며 Public 입니다.
  3. type 필드는 String 타입이며 ReadOnly(읽기 전용)필드 입니다.
- 다음 2개의 메서드를 갖습니다.
  1. getName 메서드는 name 필드의 값을 반환합니다.
  2. setSkill 메서드는 String 타입의 매개변수를 받아 skill 필드의 값을 업데이트 합니다.
*/

/* [Quiz] 구현 시그니쳐를 완성하세요 */
interface PokemonInterface {
  name: string;
  skill: string;
  readonly type: string;
  getName(): string;
  setSkill(): string;
}

class Pokemon {
  // 필드, 생성자, 메서드
  // 1. 일반 방식
  /*
      name: string;
    skill: string;
    type: string;
  
    constructor(name: string, skill: string, type: string) {
      this.name = name;
      this.skill = skill;
      this.type = type;
    }
  
    getName() {
      console.log(this.name);
    };
    setSkill(skill: string) {
        this.skill = skill;
    }
  */
  // 2. 접근 제어자 사용
  constructor(public name: string, public skill: string, public type: string) {}

  getName() {
    console.log(this.name);
  }
  setSkill(skill: string) {
    this.skill = skill;
  }
}


const pikachu = new Pokemon("피카츄", "백만볼트", "전기");
console.log(pikachu.skill);
pikachu.getName();
pikachu.setSkill("천만볼트!");
console.log(
  "------------------------------------------------------------------------------------------------------------------"
);
console.log(pikachu);
console.log(pikachu.skill);

//   const turtleKing = new Pokemon("거북왕", "물대포", "수속성")
// turtleKing.getName();
// turtleKing.setSkill("");
