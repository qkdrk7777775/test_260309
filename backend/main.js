const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
// CORS 작성 예정

app.use(
  cors({
    // origin: [
    //   "http://localhost:3000",
    //   // 허용 시킬 서비스(frontend)의 주소
    //   // 세덕님 frontend IP
    //   "http://192.168.0.32:3000",
    // ],
    origin: "*",
    credentials: true,
  }),
);

app.get("/posts", (req, res) => {
  const sample = [
    { id: 1, title: "react 연습", content: "내용" },
    { id: 2, title: "backend 연습", content: "내용" },
    { id: 3, title: "db 연습", content: "내용" },
  ];
  console.log(sample);
  return res.status(200).json({
    message: "데이터 가져오기 성공",
    data: sample,
  });
});

app.listen(5000, () => {
  console.log("백엔드 5000포트 실행중");
});
