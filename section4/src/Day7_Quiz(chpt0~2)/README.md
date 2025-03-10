### Quiz 1.

---

다음 요구사항을 만족하도록 introduce 함수의 매개변수의 타입을 정의하세요

- name 매개변수는 String 타입이며, "이정환" 이라는 기본값이 설정됩니다.
- tall 매개변수는 Number 타입이며, 선택적 매개변수 입니다.

```typescript
function introduce(name, tall) {
  if (!tall) {
    console.log(`안녕하세요 ${name}입니다!`);
  } else {
    console.log(`안녕하세요 ${name}입니다. 키는 ${tall}입니다`);
  }
}
```

**퀴즈 풀기(뱃지 클릭)**  
새 창으로 여시려면 Ctrl(Command)과 함께 클릭해주세요

<p>
<a href="https://www.typescriptlang.org/play?strict=false&noImplicitAny=false&ts=5.1.6#code/PQKgUA2gBIHN2DgTVAxg4HBqoF0yBOmwMuNUCljgNrWA1A4LargIuNSAznYI4TgGquAjzYLodUAlgHYAuATgPYAmAVwDGAUyiALVcAYQ4A1xqIBPO5IAGemVEADC4FDxioFQJ6bUAcg3jABaKGwCGAWzELlgFKaoAZW7sA5mvWAXccAOXQBooAIg8tQA01-ygPQB92+0AGOsAPnsAkGo8oQBJBrUBKFsAJpswAOmMoDjMAG0L5JUl7ADkBCwAjES53bz9AAkHAXYXAQAnS5Sh1LNyQYDAwUCgIAEUBFgAvNChAEVHADPbZQBV5wB2WwB9OqEARMcBGQcAXVahAEjHADU7NuEAHGv08KAGwADMBNiEOFh42Vk5eQVEACnMrPwFYoASigAG8wFBWHcoD8AIRAwqgiFQqFCN4AZx4hRE2UKPBcPwABoAJUcAqo1XKAAEjB-xEAF9epg4UTgQBuSFQelQESFDFiFGo9FsLE4vEE4nkyk0umMvpQQAlC-YaYi5ZhWRyofSwNrhiBRgAVEQYjizQA3o9FAAG9gAZF+xaQCvTRRAC0zgBsF2jRKCAEHHADqrUEAlWP0QA6HVBJFpaIAByaggClRwCtQ1kboN2Nx+MIRD92WAk19Uz9AiF-BmsynfnnQn4AIwAdgArBmgA" target="_blank">
<img src="https://img.shields.io/badge/-%ED%80%B4%EC%A6%88%20%ED%92%80%EA%B8%B0-3178c6?logo=typescript&logoColor=white" alt="퀴즈 풀러 가기"/>
</a>
<a href="https://www.typescriptlang.org/play?strict=false&noImplicitAny=false&ts=5.1.6#code/PQKgUA2gBIHN2DgTVAxg4HBqoF0yBOmwMuNUCljgNrWA1A4LargIuNSAznYI4TgGquAjzYLodUAlgHYAuATgPYAmAVwDGAUyiALVcAYQ4A1xqIBPO5IAGemVEADC4FDxioFQJ6bUAcg3jABaKGwCGAWzELlgFKaoAZW7sA5mvWAXccAOXQBooAIg8tQA01-ygPQB92+0AGOsAPnsAkGo8oQBJBrUBKFsAJpswAOmMoDjMAG0L5JUl7ADkBCwAjES53bz9AAkHAXYXAQAnS5Sh1LNyQYDAwUCgIAEUBFgAvNChAEVHADPbZQBV5wB2WwB9OqEARMcBGQcAXVahAEjHADU7NuEAHGv08KAGwADMBNiEOFh42Vk5eQVEACnMrKAAXgCQVCfgKxQA-AAuUzVOpcACUUAA3mAoKw7lAfgBCCGFZFojEYoRvADOPEKImyhR4Lh+AANABKjgFVGq5QAAkKP+IgAvr1MDiGYiANzoqC8qAiQpksRE4mktgUqk0umM1nsrk8-l9KCAEoX7Fz8TrMMKxRjeWBLcMQKMACoiMkcWaAG9HooAA3sADIv2LSAV6aKIAWmcANgu0aJQQAg44AdVaggEqx+iAHQ6oJItLRAAOTUEAUqOAVqGsjdBuxuPxhCIfqKwAWvsWfoEQv4yxWi78a2CoABGADsAFYy0A" target="_blank">
<img src="https://img.shields.io/badge/-%EC%A0%95%EB%8B%B5%20%ED%99%95%EC%9D%B8-c63178?logo=typescript&logoColor=white" alt="정답 확인"/>
</a>
</p>

<h1 style='color: red'><b>Quiz 1. Ans)</b></h1>

![alt text](image.png)



### Quiz 2.

---

함수 타입 표현식을 이용해 다음 요구사항을 만족하는 타입 Func를 정의하세요

- 2개의 매개변수 a와 b를 받습니다.
- 매개변수 a는 Number, b는 String 타입입니다.
- 반환값 타입은 boolean 입니다.

```typescript
type Func = any;
```

**퀴즈 풀기(뱃지 클릭)**  
새 창으로 여시려면 Ctrl(Command)과 함께 클릭해주세요

<p>
<a href="https://www.typescriptlang.org/play?strict=false&noImplicitAny=false&ts=5.1.6#code/PQKgUA2gBIHN2DgTVAxg4HBqoF0yAtVwGENUAMLgoeNSA6K4CBrgu0OAi41IC7jglWOAuq1ICdNgMuNSApY4Da1gNQOC2q9UAznYEcJwBqrgFKb8RAGIBXAHYBjQD6dUQKgTgDXHRgDkGOYALRQATMg1RAJ53JAAz24AhoAExqACNVgbB7ArUOAJpuYA6Axes7SQA5WQBbJwBTACcAGmdJAGUAF2iAS3kAcykCbz9DQAwewA01wCQaqUABcecAeyqAG0jbeShc3zAQYDAwUCgIAEVZNIAvNChAEVHADPazQBV5wB2W1UARMcBGQaZAEjHADU7VOEAHGp0OKHawZIBPAAdIqDklKABeKEajgG5O7ogAFUiAZ2SRwBvRwAY6wABvYAGRckakAr03UQAtM4AbBdEfyggBBxwA6q1A6IAR5sAOh1QbBqUSAAcmoIApUa8zH2HUUVXkXygADMFIoAFwXek3KAACls8ScAEobgA+KAAbzAUCgFKpdUiPlqVUyHJ8ySq0jSAA9IgATNnc7lPUXij6S6WytlOBVVAAyVUUtnqloA7jEAMK2D6RLU6kVQaKRZKyaJNVKySJPAC+TzAaTCJyq0WSQqgAFEAI6yG3xBMqs6KZLxYJVZIAQXkRygIdp0SqYSgACIAALHM76RQACxt9Syn2AsmSaVqH2r4Yb53eX2dro+rIgnozWeSAB484Xi3PLoo+XzYtPM5Fs3Pk6nanOAAq2aK2MI+mIfFf0vkQAAMaHi8nCUWi683opnO-n+5tx9Pc9L2ia9VzvABGJ8oC+dIsnXMA0CeIA" target="_blank">
<img src="https://img.shields.io/badge/-%ED%80%B4%EC%A6%88%20%ED%92%80%EA%B8%B0-3178c6?logo=typescript&logoColor=white" alt="퀴즈 풀러 가기"/>
</a>
<a href="https://www.typescriptlang.org/play?strict=false&noImplicitAny=false&ts=5.1.6#code/PQKgUA2gBIHN2DgTVAxg4HBqoF0yAtVwGENUAMLgoeNSA6K4CBrgu0OAi41IC7jglWOAuq1ICdNgMuNSApY4Da1gNQOC2q9UAznYEcJwBqrgFKb8RAGIBXAHYBjQD6dUQKgTgDXHRgDkGOYALRQATMg1RAJ53JAAz24AhoAExqACNVgbB7ArUOAJpuYA6Axes7SQA5WQBbJwBTACcAGmdJAGUAF2iAS3kAcykCbz9DQAwewA01wCQaqUABcecAeyqAG0jbeShc3zAQYDAwUCgIAEVZNIAvNChAEVHADPazQBV5wB2W1UARMcBGQaZAEjHADU7VOEAHGp0OKHawZIBPAAdIqDklKABeKAAKWwAuKHlwqLjnZ4BnVIzMgEobgA+ap1BryADcnW6EAAKpEfiNADejgAY6wABvYAGRckakAr03UQAtM4AbBdEKKggBBxwA6q1A6IAR5sAOh1QbBqUSAAcmoIApUa8zH2HUUVXkPygADMFIpnpdFDd7rZ4k5AdcQQBvMBQKB8gVgny1KqZB4+ZJVaRpAAekQAJnd-v8oar1V9NdrdU59VUADJVRS2erugDuMQAwrYvpFLdaVVBopFkrJok1UrJIlCAL5QsBpMInKrRZJQRVQACiAEdZF74vnjWdFMl4sEqskAILyI5QJPC6JVMJQABEAAFjmd9IoABZe+pZBHAWTJNK1L5d1P987wn6B4NfKUQcPlyvJAA8tYbTd3EqBQNiW4rkSru6LJdqu4ACrZorYwlGYl9j6KgRAAAxoeJXgiGJT3PVVtyvPdby9R9n1fd9ok-E8IAARgAqAfnSLJTzANAoSAA" target="_blank">
<img src="https://img.shields.io/badge/-%EC%A0%95%EB%8B%B5%20%ED%99%95%EC%9D%B8-c63178?logo=typescript&logoColor=white" alt="정답 확인"/>
</a>
</p>

<h1 style='color: red'><b>Quiz 2. Ans)</b></h1>

![alt text](image-1.png)