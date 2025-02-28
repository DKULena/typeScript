/**
 * 제네릭 클래스
 */

// 일반 클래스 타입
// class NumberList {
//     constructor(private list: number[]) { }
    
//     push(data: number) {
//         this.list.push(data);
//     }
//     pop() {
//         this.list.pop();
//     }
//     print() {
//         console.log(this.list)
//     }
// }

// 제네릭 클래스 타입
class TypeList<T> {
    // 필드, 생성자, 메서드
    // 생성자에 접근제어자를 달면 필드를 생략

    constructor(private list: T[]) { }
    
    push(data: T) {
        this.list.push(data);
    }

    pop() {
        this.list.pop();
    }

    print() {
        console.log(this.list)
    }

}

const numList = new TypeList([1, 2, 3]);
numList.pop();
numList.push(4);
numList.print();

const strList = new TypeList(['a', 'b', 'c'])
strList.pop();
strList.push('d');
strList.print();