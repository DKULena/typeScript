### Quiz 1.

---

타입 단언을 이용해 person 변수에 빈 객체를 할당하세요  
(힌트. 초과 프로퍼티 검사 방지를 위한 타입 단언)

```typescript
type Person = {
  name: string;
  age: number;
};

let person: Person = {};
```

**퀴즈 풀기(뱃지 클릭)**  
새 창으로 여시려면 Ctrl(Command)과 함께 클릭해주세요

<p>
<a href="https://www.typescriptlang.org/play?strict=false&noImplicitAny=false&ts=5.1.6#code/PQKgUA2gBIHN2DgTVAxg4HBqoF0yAGFwoeNUBdNgHaOAi41IC7jglWOAuq1AA4CmATgM4D2AdlIAM9gGEOALo1IAk+qIFwawC0zgH06ogA1XAn02ANVcAcg4BSxsAApAMeuAOpYB0UQBCzgH5qogEFXAOh2AfZcAPS1EABNYBqBqIEoewAOTkwCDjgHVWoOfAQCUYCDAYGAALgCe9FAACoysHAC8UADeYFBQbACGALZ0AFxQTKEMAJZsAOYA3GlQmeX5GQCu2QBGjNUAvtVgADZ0obRx7AWxzOxQScldYEA" target="_blank">
<img src="https://img.shields.io/badge/-%ED%80%B4%EC%A6%88%20%ED%92%80%EA%B8%B0-3178c6?logo=typescript&logoColor=white" alt="퀴즈 풀러 가기"/>
</a>
<a href="https://www.typescriptlang.org/play?strict=false&noImplicitAny=false&ts=5.1.6#code/PQKgUA2gBIHN2DgTVAxg4HBqoF0yAGFwoeNUBdNgHaOAi41IC7jglWOAuq1AA4CmATgM4D2AdlIAM9gGEOALo1IAk+qIFwawC0zgH06ogA1XAn02ANVcAcg4BSxsAApAMeuAOpYB0UQBCzgH5qogEFXAOh2AfZcAPS1EABNYBqBqIEoewAOTkwCDjgHVWoOfAQCUYCDAYGAALgCe9FAACoysHAC8UADeYFBQbACGALZ0AFxQTKEMAJZsAOYA3GlQmeX5GQCu2QBGjNUAvtVgADZ0obRx7AWxzOxQSckdtUwxQ2zVQA" target="_blank">
<img src="https://img.shields.io/badge/-%EC%A0%95%EB%8B%B5%20%ED%99%95%EC%9D%B8-c63178?logo=typescript&logoColor=white" alt="정답 확인"/>
</a>
</p>

<h1 style='color: red'><b>Quiz 1. Ans)</b></h1>
<img src= './image.png'>

### Quiz 2.

---

타입 단언을 이용해 함수 호출에서의 오류를 해결하세요  
(힌트. const 단언)

```typescript
let value = 10;
giveMe10(value);

function giveMe10(value: 10) {
  return value;
}
```

**퀴즈 풀기(뱃지 클릭)**  
새 창으로 여시려면 Ctrl(Command)과 함께 클릭해주세요

<p>
<a href="https://www.typescriptlang.org/play?strict=false&noImplicitAny=false&ts=5.1.6#code/PQKgUA2gBIHN2DgTVAxg4HBqoF0yAGFwoeNUBdNgHaOAi41IC7jglWOAuq1IBargGENSAca4DmzgC6OA4g4BrjUgJGOAanYB9OqJUANNYA1VwByDgFLGwACkAx64A6lgHRQAxgHsAdgGcALvgIBKMCGBgwAGwCmBgG4BDSwFdrUALxQAjAAYA3GAA5gCWdtYAsta+so4u1kYBYKBQEAAq1vpoUIA3o4AMdYABvYAMi4ApTVCAqBOAr00kgC0zgDYLYrlQgCDjgDqrUOSAI82AOh1QdGVigAOTUIBSo4CtQ4ATTYAnTVBmYABmzlpqesHaUCFhkdGxrgBc3j5GUADeYFBQAE62zhdaUDvWAQC+YEA" target="_blank">
<img src="https://img.shields.io/badge/-%ED%80%B4%EC%A6%88%20%ED%92%80%EA%B8%B0-3178c6?logo=typescript&logoColor=white" alt="퀴즈 풀러 가기"/>
</a>
<a href="https://www.typescriptlang.org/play?strict=false&noImplicitAny=false&ts=5.1.6#code/PQKgUA2gBIHN2DgTVAxg4HBqoF0yAGFwoeNUBdNgHaOAi41IC7jglWOAuq1ICKjgGe1SAq84DstgGuNSAkY4BqdgPp1SWAGmsAaq4A5BwCljYABSAY9cAdSwDooAYwD2AOwDOAF3wEAlGBDAwYADYBTHQDcAhqYCu5qAF4oARgAMUGxuXrtANxgAOYAllbmALLmnpK2DuZ6QWCgUBAAKubaaFCAN6OADHWAAb2ADIuAKU1QgKgTgK9NJIAtM4A2C0L5UIAg44A6q1DkgCPNgDodUIAYQxVCgAOTUIBSo4CtQ4ATTYAnTVBGYABm9mpKWqHqUGER0bHxjgBc7h56UADeYFBQAE6W9tdqUPvmQQC+YEA" target="_blank">
<img src="https://img.shields.io/badge/-%EC%A0%95%EB%8B%B5%20%ED%99%95%EC%9D%B8-c63178?logo=typescript&logoColor=white" alt="정답 확인"/>
</a>
</p>

<h1 style='color: red'><b>Quiz 2. Ans)</b></h1>
<img src= './image-1.png'>

> 타입 단언을 사용하는 문제이기 때문에 as const로 고정을 했지만, 아직 
> - `const value = 10;` // const로 재할당 불가
> - `let value: 10 = 10;` // value -> 타입 추론(리터럴)
> - `let value = 10 as const` // readonly로 고정
> 세 가지의 차이점은 헷갈리네요

### Quiz 3.

---

다음 요구사항을 만족하는 코드를 작성하세요

- CompanyMember 타입을 Boss와 Employee의 서로소 유니온 타입으로 정의하세요

```typescript
type Boss = {
  car: string;
};

type Employee = {
  salary: number;
};

type CompanyMember = Employee | Boss;
```

**퀴즈 풀기(뱃지 클릭)**  
새 창으로 여시려면 Ctrl(Command)과 함께 클릭해주세요

<p>
<a href="https://www.typescriptlang.org/play?strict=false&noImplicitAny=false&ts=5.1.6#code/PQKgUA2gBIHN2DgTVAxg4HBqoF0yBOmwMuNUCljgNrWA1A4LargIuNSAznYI4TgGquApTVICrzgOy2A+nVIInjgjIO2Acg3jABaKAGEA9gFsADgEMAdgE8AsgFNJAI1UAnKIAGFwKHjFAELiAzmcACY1ACiMgDbjFq1YA1xqIBxBwDodiKIAJxwAmmwAox-QNAHnGvKEBUCdd+QRBgMDBQKAgARQBXAEsALzQoQBFRwAz291YOQBEx7kAXVahAEjHADU6OOEAHGrioBLAAF0VpVShTCygAXigAbzAoKABjWW0ALigzTu0s+QBzAG4wAF8trp6+u2lHZz6R8cmzWXtZxQX5DM0dLd2k7t6xKTklNSfdEaOJxcUAAPv1zGY9ikIAAVVRLfKAG9HAAx1gADewAMi4wooBXpoogBaZwA2C7RkVBACDjgB1VqCASrHACPNkUAGENRWiAAcmoIApUcArUMBTDtRIAMwy8imnSy4nkUE68M6AAopl8FCp1Fp5p8ZArfsqAJRjCZQLJ8qCy+U-JU6AB07zOQxGACIBmYbdqLpNpmKzOJ7KozY41tKbURAKXjgA2mqCABDaoIAKGaggBQewAX9TyFjaADSutUmv5mmbaTVbSbbKCqexmPr6w1ytOKjOW4bWqA2wFOFyOnUu13yd2e73iX02gqAQcmaVBACtjgEg6wAC41BEyny99K8qzVcbtpFDnddsdmAgA" target="_blank">
<img src="https://img.shields.io/badge/-%ED%80%B4%EC%A6%88%20%ED%92%80%EA%B8%B0-3178c6?logo=typescript&logoColor=white" alt="퀴즈 풀러 가기"/>
</a>
<a href="https://www.typescriptlang.org/play?strict=false&noImplicitAny=false&ts=5.1.6#code/PQKgUA2gBIHN2DgTVAxg4HBqoF0yBOmwMuNUCljgNrWA1A4LargIuNSAznYI4TgGquApTVICrzgOy2A+nVIInjgjIO2Acg3jABaKAGEA9gFsADgEMAdgE8AsgFNJAI1UAnKIAGFwKHjFAELiAzmcACY1ACiMgDbjFq1YA1xqIBxBwDodiKIAJxwAmmwAox-QNAHnGvKEBUCdd+QRBgMDBQKAgARQBXAEsALzQoQBFRwAz291YOQBEx7kAXVahAEjHADU6OOEAHGrioBLAAF0VpVShTCygAXigAbzAoKG7egC4oACIBs3mAbgmoAGNZbTmzTu0s+QBzNYBfNa6evrtpR2c+kfHJ6dU5+Zu7l1X1s1l7bcUc3kGU0OjOFxeYikciUalBuhGHycLigAB9+uYzBcUhAACqqPb5QA3o4AGOsAAb2ABkXGFFAK9NFEALTOAGwXaCSoIAQccAOqtQQCVY4AR5sigAwhqK0QADk1BAFKjgFahgKYdqJABmGXkG06WXE8imBM6AAoNtCFCp1FodlCZAa4caAJRjdZZeVQXX62FGnQAOkhQ09CyW82tT0mm3VZnE9lUrscR218yIgFLxwAbTVBAAhtUEAFDNQQAoPYAL+tlbwANIGzc74a6ttpLWtJqcoKp7GY+naHXrC4bix6ve8HMjVL6bQHA-Jg6Hw+JI-MCoBByd5UEAK2OASDrAALjUDzBZhLeNrt+-20inL61OYH3QA" target="_blank">
<img src="https://img.shields.io/badge/-%EC%A0%95%EB%8B%B5%20%ED%99%95%EC%9D%B8-c63178?logo=typescript&logoColor=white" alt="정답 확인"/>
</a>
</p>


<h1 style='color: red'><b>Quiz 3. Ans)</b></h1>

![alt text](image-2.png)

> 문자열 리터럴 타입을 독립적으로 부여하여 겹치는 상황을 방지