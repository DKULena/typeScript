/**
 * 인터페이스와 클래스
 */

interface CharacterInterface {
  name: string;
  moveSpeed: number;
  move(): void;
}

class Character implements CharacterInterface {
  // 필드, 생성자, 메서드
  // name: string;
  // moveSpeed: number;

  // constructor(name: string, moveSpeed: number) {
  //     this.name = name;
  //     this.moveSpeed = moveSpeed;
  // }

    constructor(
        public name: string,
        public moveSpeed: number
    ) { } // -> 생성자에 접근 제어자를 달아주면 깔끔해짐
          // -> 인터페이스로 정의한 필드는 무조건 public

  move(): void {
    console.log(`${this.moveSpeed} 속도로 이동`);
  }
}

const a = new Character("a", 12);
a.move();