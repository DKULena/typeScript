/**
 * 인덱스드 엑세스 타입
 */
const author = "author";
// function printAuthorInfo(author: { id: number; name: string; age: number; }) {
//     console.log(`${author.name}-${author.id}`);
// }
// Interface["인덱스"] -> "인덱스"는 값이 아니라 타입
// const author = "author" 와 같이 할당 불가
// const printAuthorInfo = (author: Post[author]) => { // author 형식을 인덱스 형식으로 사용할 수 없습니다.
const printAuthorInfo = (author) => {
    console.log(`${author.name}-${author.id}`);
};
const printAuthorInfo2 = (author) => {
    console.log(`${author.name}-${author.id}`);
};
const post = {
    title: "게시글 제목",
    content: "게시글 본문",
    author: {
        id: 1,
        name: "이정환",
        age: 27
    },
};
printAuthorInfo(post.author);
const postlist = {
    title: "게시글 제목",
    content: "게시글 본문",
    author: {
        id: 1,
        name: "이정환",
        age: 27
    },
};
printAuthorInfo(postlist.author);
export {};
