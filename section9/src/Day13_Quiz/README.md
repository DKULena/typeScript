### Quiz 1.

---

다음 요구사항을 만족하는 IsProductKey<T> 타입을 완성하세요

- IsProductKey 타입은 조건부 타입으로 다음 조건에 따라 각각 다른 타입으로 결정됩니다.
  - T가 Product의 key(프로퍼티 이름)중 하나일 경우 결과는 true 타입이 됩니다.
  - T가 Product의 key(프로퍼티 이름)중 하나가 아닐 경우 결과는 false 타입이 됩니다.
  - 예를 들면 다음과 같습니다.
    - ex) IsProductKey<"id"> 타입은 true 타입이 됩니다.
    - ex) IsProductKey<"author"> 타입은 false 타입이 됩니다.

```typescript
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

type IsProductKey<T> = any;
```

**퀴즈 풀기(뱃지 클릭)**  
새 창으로 여시려면 Ctrl(Command)과 함께 클릭해주세요

<p>
<a href="https://www.typescriptlang.org/play?strict=false&noImplicitAny=false&ts=5.1.6#code/PQKgUA2gBIHN2DgTVAxg4HBqoF0yBOmwMuNUCljgNrWA1A4LargIuNSAznYI4TgGquApTVAJIDOACgE4D2AJgK4BjAC4BpAKYBPADwAVAHxRAAwuBQ8YqARMcCMg7UAcg3jABaZu279h4iUuWABcaiAHCcAuNYADey4B5xwDodUHHfuAF0aiAGVsAfdqhAQBqQz0APTtcPQAaawFQJwEoWwAmmzAA6MCgoQxlAABqoTl5BIUANcagAa0kACkAQVbdAH2XAB6WoQBdxwBDOgEpAREmoWkAMhsAfcahAXprABrGoGMAfmsYhDj4xS2aoZLSMrKhc-JMi0oqJGvqmtq6e3rzAEVHABabhscnGADMAQwAbFnmVReX0zMNACDHAH06oIATlsALl2ebATKCATBrAK1DKS+mTWYgAHu0jAVTKJJFIAEQASx42IUKhsMzmCyWcNW3ygyNRrHRRXMOIefCEAAsuBxCZYbI8Xm9lB9KSBgGAwKAoBAAIp8XEALzQUDOgAz20qAFXnADstAMAGENxHR4KAisC4gB2QjEHEeAnmDOEUAA3qt8QAuKAmvgAWwARhaANyrE0PD1iV0sGamgDm-syAAcOLjra73d6-atXk8nhbXY6EVAXW7PT6ONGEYHg6Hwyao1SoAIuB6Yw8TRIK-GqyWAL7+jtioQSGPzelbMxY+RQAC8UCbEn94pAkpkYjDisAN6OABjrHIAGRcYcUAr00UQAtM4AbBdoa6ggBBxwA6q1BAJVjgBHmjy62iAAcmoIApUdhmENotxDc5QgdKAAFEAEc+GeAAaYCkQHO0OygO5uA9KBsQAAT7Ad9AENlnkzKsl2AVlcRebFZww+ZFzDABhB5XhYCdJVWICYLEYQpFA8CnikIdChHaQ8QJOQoNJMQ5CEpiWLYjjnm44xeMxfiyzEQlhNmUTxMyZjYKEdiwJkniMSZbEWXZTkVIQ55XjEiCJO03TONk20FJxAB3U1zQ4J4uF4cy+SsuQwDQf0gA" target="_blank">
<img src="https://img.shields.io/badge/-%ED%80%B4%EC%A6%88%20%ED%92%80%EA%B8%B0-3178c6?logo=typescript&logoColor=white" alt="퀴즈 풀러 가기"/>
</a>
<a href="https://www.typescriptlang.org/play?strict=false&noImplicitAny=false&ts=5.1.6#code/PQKgUA2gBIHN2DgTVAxg4HBqoF0yBOmwMuNUCljgNrWA1A4LargIuNSAznYI4TgGquApTVAJIDOACgE4D2AJgK4BjAC4BpAKYBPADwAVAHxRAAwuBQ8YqARMcCMg7UAcg3jABaZu279h4iUuWABcaiAHCcAuNYADey4B5xwDodUHHfuAF0aiAGVsAfdqhAQBqQz0APTtcPQAaawFQJwEoWwAmmzAA6MCgoQxlAABqoTl5BIUANcagAa0kACkAQVbdAH2XAB6WoQBdxwBDOgEpAREmoWkAMhsAfcahAXprABrGoGMAfmsYhDj4xS2aoZLSMrKhc-JMi0oqJGvqmtq6e3rzAEVHABabhscnGADMAQwAbFnmVReX0zMNACDHAH06oIATlsALl2ebATKCATBrAK1DKS+mTWYgAHu0jAVTKJJFIAEQASx42IUKhsMzmCyWcNW3ygyNRrHRRXMOIefCEAAsuBxCZYbI8Xm9lB9KSBgGAwKAoBAAIp8XEALzQUDOgAz20qAFXnADstAMAGENxHR4KAisC4gB2QjEHEeAnmDOEUAA3qt8QAuKAmvgAWwARhaANyrE0PD1iV0sGamgDm-syAAcOLjra73d6-atXk8nhbXY6EVAXW7PT6ONGEYHg6Hwyao1SoAIuB6Yw8TRIK-GqyWAL7+jtioQSGPzelbMxY+RQAC86xpSPNJp4LHKki4d02hTtAH4oKT5q6+a9-eKQJKZGIw4rADejgAY6xyABkXGHFAK9NFEALTOAGwXaJeoIAQccAOqtQQCVY4AI80eLqtCAAOTUCAFKjsKYIaoq4g2nJCA6UAAKIAI58M8AA0aFIgOdodlAdzcB6UDYgAAn2A76AIbLPJmVansArK4i82IHtR8wnmGADCDyvAuk4QKsqH4WIwhSBhWFPFIQ5rpi0h4gSci4duciqaJ4mSdJzxycYClMtiZZiISamzGIGnYVpBFCFJmF6fJGJGSy7KcmZxHPK8Vk2RJdm6bJTmMli2IAO6muaHBPFwvAeXullyGAaD+kAA" target="_blank">
<img src="https://img.shields.io/badge/-%EC%A0%95%EB%8B%B5%20%ED%99%95%EC%9D%B8-c63178?logo=typescript&logoColor=white" alt="정답 확인"/>
</a>
</p>

### 
<h1 style='color:red; font-size: 40px; font-weight: 900'>Quiz1. Ans)</h1>

![alt text](image.png)

### Quiz 2.

---

다음 조건을 만족하는 Extract<T, U> 타입을 구현하세요

- Extract<T, U> 타입은 T로부터 U만 추출하는 타입입니다.
  - ex) Extract<string | boolean, boolean>은 boolean 타입이 됩니다.
  - ex) Extract<number | string, string>은 string 타입이 됩니다.

(힌트💡 강의 중 직접 구현하는 Exclude 타입의 반대라고 생각해보세요!)

```typescript
type Extract<T, U> = any;
```

**퀴즈 풀기(뱃지 클릭)**  
새 창으로 여시려면 Ctrl(Command)과 함께 클릭해주세요

<p>
<a href="https://www.typescriptlang.org/play?strict=false&noImplicitAny=false&ts=5.1.6#code/PQKgUA2gBIHN2DgTVAxg4HBqoF0yBOmwMuNUA4TgLjWAi41IDOdgjhOAaq4ClNUAogB4AuATgIYDGTAPACoA0UAKoA+KIAGFwKHjJQDa1gEDXKgDkHAKWNgAtPWbsufQaImTAAuNRegHQ7AAb2AGReGkogFNnAObM0DkwBNNmAHRgoUDQFMGAEpNVk4eAGdWAEsAOwBzKAAfKAAjAHs0gBs-NhjBdKycmJFjAuzcg0AXcahAShb3Lx9-IJDtHhiAVwBbFL8WJKhIlli4wUHhkoHo+Kra+rAwAApAGPXADqXAXg3AQp2oQFQawA1xqEBESahAQcnARAmoeWdGDkz2gBM-A33ADB7AAGbAH3bAA5qoQF2BwEAawAuq4AXnpUAEJAmAQMB5qAoBAAIrtKIALzQUEAIqOADPb9oAVecAOy2AH06oIAMIcAqBNKZRQKFgJgATwADo9GKEdAJhGIALxQXK0gDcMJAcN4fkiaMAN6OABjqrLRSYBXppIgBaZwA2C5QJVBACDjgB1VqCASrHACPNphJ5MAA5NQQBSo4BWofcVOhUU69LSLCYUAA3vQAI7tNiZQSMRlcKAAXygADMWGlOlAAEQAATpjLUHAAFt7svERcB2kwoplwlH+TSGY9hZEAMJscIiqBciDeTT+nh0T3e7jM1rcMbTZIdbq9UZTOIiftDeIiId1v1+HRNr2ZVtaMIdgf9Hs9FiCVe9IdQTcsMdgND8oA" target="_blank">
<img src="https://img.shields.io/badge/-%ED%80%B4%EC%A6%88%20%ED%92%80%EA%B8%B0-3178c6?logo=typescript&logoColor=white" alt="퀴즈 풀러 가기"/>
</a>
<a href="https://www.typescriptlang.org/play?strict=false&noImplicitAny=false&ts=5.1.6#code/PQKgUA2gBIHN2DgTVAxg4HBqoF0yBOmwMuNUA4TgLjWAi41IDOdgjhOAaq4ClNUAogB4AuATgIYDGTAPACoA0UAKoA+KIAGFwKHjJQDa1gEDXKgDkHAKWNgAtPWbsufQaImTAAuNRegHQ7AAb2AGReGkogFNnAObM0DkwBNNmAHRgoUDQFMGAEpNVk4eAGdWAEsAOwBzKAAfKAAjAHs0gBs-NhjBdKycmJFjAuzcg0AXcahAShb3Lx9-IJDtHhiAVwBbFL8WJKhIlli4wUHhkoHo+Kra+rAwAApAGPXADqXAXg3AQp2oQFQawA1xqEBESahAQcnARAmoeWdGDkz2gBM-A33ADB7AAGbAH3bAA5qoQF2BwEAawAuq4AXnpUAEJAmAQMB5qAoBAAIrtKIALzQUEAIqOADPb9oAVecAOy2AH06oIAMIcAqBNKZRQKFgJgATwADo9GKEdAJhGIALwmKABJh+GJ3cLCKAAfm5AC4oDE-AA3XoAbhhIDhvD8kTRgBvRwAMdVZaKTAK9NJEALTOAGwXKFqoIAQccAOqtQQCVY4AR5tMJPJgAHJqCAKVHAK1D7ip0KinXpaRYTCgAG96ABHdpsTKCRiMrhQAC+UAAZiw0p0oAAiAACdMZag4AAtY9l4mrgO0mFFMuEc4qaQzHqrIgBhNjhNVQLkQbyaRM8OjR2PcZmtbhjabJDrdXqjKZxESLobxEQrgcJvw6EcxzLjrRhKdL-pznosQTn3orqVdC8bsBoRVAA" target="_blank">
<img src="https://img.shields.io/badge/-%EC%A0%95%EB%8B%B5%20%ED%99%95%EC%9D%B8-c63178?logo=typescript&logoColor=white" alt="정답 확인"/>
</a>
</p>

### 
<h1 style='color:red; font-size: 40px; font-weight: 900'>Quiz2. Ans)</h1>

![alt text](image-3.png)

### Quiz 3.

---

배열 타입의 요소를 추출하는 InferArrayType<T> 타입을 구현하세요

```typescript
type InferArrayType<T> = any;
```

**퀴즈 풀기(뱃지 클릭)**  
새 창으로 여시려면 Ctrl(Command)과 함께 클릭해주세요

<p>
<a href="https://www.typescriptlang.org/play?strict=false&noImplicitAny=false&ts=5.1.6#code/PQKgUA2gBIHN2DgTVAxg4HBqoF0yAYewL6NUAMLgoeOAa41ICljigPp1SAps4DmzgGquApTVAJIB2AZgKYBOAgjx4BDAJ4AVEQAcuAHjEA+fAUAi41EA2tYBA1+oA5B0mBDAwYUFAgBFAK4BLAF5oogEVHAGe0lAKvOAdlqqAMIcCoEztJQBmAALlJcrJy8AsLiYXKKALxQQmwiANxGJhBiXADOwfaAN6OADHWAAb2ADIvMPoCvTaqALTOANgv0xVCAIOOAOqtQgJVjgCPNgDodUL70gAOTUIBSo4CtQ4ATTYAnTYGGVgC2kgD2PMFQAN5QAKIAHtIAxsEANLsAjhZCADZQAL5QHDwri1AARAACodIAtIcAFjdrlw2ABzPLACzBKzXXJvDJgQ4rNj5ZKCACMUCSEHRZwATGcAMxoDJIlEbISCPFY0xvf5ca7XFZvM5vRYiNhCRZcFnvADuVjYwV4TJWABM3iTEcjUZSeISaTizsEeBYuKz-lZJQjvuEcvkAMJCXJ5RVgKC7A5cY4yHaXG4ydjcfiCUQSaQyXUrDhonjo+RnNgWRYAI148gD5stR2Ctvt10dkRdMXdsi9PrleIDUHyPEFoIjJyj+xjcauCadUVdsQ96d9hOzQdDvCgAB8cyr822oCGVitgSkI2ApUA" target="_blank">
<img src="https://img.shields.io/badge/-%ED%80%B4%EC%A6%88%20%ED%92%80%EA%B8%B0-3178c6?logo=typescript&logoColor=white" alt="퀴즈 풀러 가기"/>
</a>
<a href="https://www.typescriptlang.org/play?strict=false&noImplicitAny=false&ts=5.1.6#code/PQKgUA2gBIHN2DgTVAxg4HBqoF0yAYewL6NUAMLgoeOAa41ICljigPp1SAps4DmzgGquApTVAJIB2AZgKYBOAgjx4BDAJ4AVEQAcuAHjEA+fAUAi41EA2tYBA1+oA5B0mBDAwYUFAgBFAK4BLAF5oogEVHAGe0lAKvOAdlqqAMIcCoEztJQBmAALlJcrJy8AsLiYXKKALxQYlBcAB7BXGwAJgDOUAAUVpE8UABKAJQQ9gD85VAAXFBsXABuvADcRiYQYly5wfaAN6OADHWAAb2ADIvMPoCvTaqALTOANgv0I1CAIOOAOqtQgJVjgCPNgDodUL70gAOTUIBSo4CtQ4ATTYAnTYGGVgC2kgD2PMFQAN5QAKJp0gAxsEADR-ACOFiEABsoABfKAcHivJ5QABEAAFQtIALSAgAWMOhWQA5v1gBZglZobk0V0wIDXmwBlAhIIAIxQJIQdlggBMYIAzGguozmZ82Tw+VzTGj8VxodDXmiwWiniI2EInlwVeiAO7FTI8JWvbJokUMpksyWCmU8sHBHgWLiq-FWc307HhPoDADCQly-TtYCgfwBXGBMl+kJhMnY3H4glEEmkMi9rw4rI58jBbAsTwARrx5DmQ2GgcEozHoXGStFk3F05nJXyc1ABjxiiSSyCy-8K1WoTX41Ek7FU02szxBW284XeFAAD7tx1dpdQAuvV7EoRsEtgC1AA" target="_blank">
<img src="https://img.shields.io/badge/-%EC%A0%95%EB%8B%B5%20%ED%99%95%EC%9D%B8-c63178?logo=typescript&logoColor=white" alt="정답 확인"/>
</a>
</p>

### 
<h1 style='color:red; font-size: 40px; font-weight: 900'>Quiz3. Ans)</h1>

![alt text](image-2.png)