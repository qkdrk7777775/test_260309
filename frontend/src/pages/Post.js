import axios from "axios";

function Post() {
  // 비동기 처리를 위한 함수 생성
  async function fetchPosts() {
    // 조건? 참값 : 거짓값 - 조건을 만족하면
    // 참값 만족하지 않으면 거짓 값

    // process.env.NODE_ENV === "production"  build 진행 시에는
    // process.env.NODE_ENV 값이 production으로 설정
    // npm run start 실행 시에는 process.env.NODE_ENV development
    const SERVER_URL =
      process.env.NODE_ENV === "production" ? "/py" : "http://localhost:5000";
    console.log(`${SERVER_URL}/posts`);
    const res = await axios.get(
      // 요청할 백엔드 IP 및 주소
      // "http://192.168.0.26:5000/posts",
      // "http://localhost:80/py/posts",
      `${SERVER_URL}/posts`,
    );
    console.log(res);
  }
  fetchPosts();
  // 14분
  // JavaScript 작성하는 공간
  const sample = [
    { id: 1, title: "react 연습", content: "내용" },
    { id: 2, title: "backend 연습", content: "내용" },
    { id: 3, title: "db 연습", content: "내용" },
  ];
  return (
    <>
      {/* HTML 작성하는 공간 */}
      <ul>
        {sample.map((item) => (
          <li key={item.id}>
            <h2>{item.title}</h2>
            <p>{item.content}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
// posts 라는 이름으로 라우트에 추가(19분)
export default Post;
