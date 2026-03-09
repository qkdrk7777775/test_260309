# 원격 저장소 코드 설명

- git init : 저장소가 없으면 생성 있으면 초기화
- git add 파일명 or git add . : 파일을 임시 저장소에 등록
- git commit -m "커밋 메세지 내용" : 파일을 스냅샷 형태로 버전관리
- git branch -m main : main이라는 이름의 브랜치 생성 및 변경
- git remote add 별명 주소 : 별명 형태로 원격 저장소 주소를 기억
- git push -u 별명 브랜치명 : 브랜치명의 버전을 별명의 원격 저장소로 보냄

```bash
# 로컬 저장소에 반영
git pull : 원격저장소에서 내 로컬 저장소로 가져올 때 사용
git add 파일명 : 수정 및 생성 작업을 진행했을 때 임시저장소에 반영
git commit -m "커밋내용" : 임시 저장소의 내용을 버전관리 시작
# 원격 저장소에 동기화
git push : 로컬 저장소의 내용을 원격 저장소로 반영
```

# frontend 명령어

```bash
# frontend라는 이름으로 프론트앤드 프로젝트 생성
npx create-react-app frontend
# frontend 폴더로 이동
cd frontend
# frontend 실행
npm run start

# 패키지 설치
npm install 패키지명
# 예시
npm install react-router-dom
```

로드벨런싱 방식

- 라운드로빈: 순차적으로 컴퓨터에 부하를 부여, (com1, com2, com3,..)
- 최소연결: 남은 작업 수가 가장 적은 컴퓨터에 작업을 부여
- 해쉬 방식: 기존에 요청을 처리했던 서버로 지속적으로 부하를 배정하고 싶을 때
