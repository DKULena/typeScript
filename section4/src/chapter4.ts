/**
 * 사용자 정의 타입가드
 */

type Dog = {
    name: string;
    isBark: boolean;
};

type Cat = {
    name: string;
    isScratch: boolean;
};

type Animal = Dog | Cat;

function isDog(animal: Animal): animal is Dog {
    return (animal as Dog).isBark !== undefined; // animal을 Dog로 타입 단언, 이후 isBark가 있는지 판별
}

const isCat = (animal: Animal): animal is Cat => {
    return (animal as Cat).isScratch !== undefined;
}

function warning(animal: Animal) {
    if (isDog(animal)) {
        // 강아지
        animal;
    } else if (isCat(animal)) {
        // 고양이
        animal;
    }
    
}