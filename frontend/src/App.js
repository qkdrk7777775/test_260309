import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./HomePage";
import Post from "./pages/Post";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path = "/추가로 붙는 주소" element={<실행할자바스크립트함수/>}/> */}
        {/* <HomePage></HomePage> 이것과 <HomePage/> 이 같음 */}
        <Route path="/" element={<HomePage></HomePage>}></Route>
        {/* <Route path = "/" element={<HomePage/>}/> */}
        <Route path="/posts" element={<Post />} />
        {/* 위에서 기재한 주소를 제외한 나머지 주소 입력 시 /경로로 이동 */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
