/**
 * 인덱스드 엑세스 타입
 */

// 객체에서 엑세스
interface Post {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
    age: number;
  };
}

const author = "author";

// function printAuthorInfo(author: { id: number; name: string; age: number; }) {
//     console.log(`${author.name}-${author.id}`);
// }

// Interface["인덱스"] -> "인덱스"는 값이 아니라 타입
// const author = "author" 와 같이 할당 불가
// const printAuthorInfo = (author: Post[author]) => { // author 형식을 인덱스 형식으로 사용할 수 없습니다.

// const printAuthorInfo = (author: Post["author"]) => { // Post 인터페이스에 "author" 프로퍼티가 타입이다.
//     console.log(`${author.name}-${author.id}`);
// }
const printAuthorInfo = (author: { id: number; name: string; age: number }) => {
  // Post 인터페이스에 "author" 프로퍼티가 타입이다.
  console.log(`${author.name}-${author.id}`);
};
const printAuthorInfo2 = (author: PostList[number]["author"]) => {
  // PostList[number] === Post -> Post["author"]
  console.log(`${author.name}-${author.id}`);
};

const post: Post = {
  title: "게시글 제목",
  content: "게시글 본문",
  author: {
    id: 1,
    name: "이정환",
    age: 27,
  },
};

printAuthorInfo(post.author); // { id: 1, name: "이정환", age: 27 }

// 배열에서 - 인터페이스는 객체타입 정의에 특화
type PostList = {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
    age: number;
  };
}[];

const postlist: PostList[number] = {
  title: "게시글 제목",
  content: "게시글 본문",
  author: {
    id: 1,
    name: "이정환",
    age: 27,
  },
};

printAuthorInfo(postlist.author);

// 튜플
type Tup = [number, string, boolean];
type Tup0 = Tup[0];
type Tup1 = Tup[1];
type Tup2 = Tup[2];

type TupNum = Tup[number];
