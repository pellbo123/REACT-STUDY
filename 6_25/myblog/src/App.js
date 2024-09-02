import './App.css';
import { useState } from 'react'
// 리액트는 데이터를 저장할때 state라는 것을 쓸 수 있다.
// state는 저장된 내용에 변동사항이 생기면 HTML을 자동으로 재 렌더링 해준다.
// 그래서 귀찮게 새로고침 문법을 넣을 필요가 없다.
function App() {
  let [글제목,글제목변경] = useState(['남자 코트 추천', '강남 우동 맛집', '알고리즘 독학']);
  let [따봉,따봉변경] = useState(0);
  // let[a,b] 이 문법은 JS의 비구조회(destructuring..) array에 있는 데이터를 변수로
  // 저장하고 싶을 때 사용
  // let [name,age] = ['kim',20];

  let post = '강남 우동 맛집';
  // 변수에 있는걸 html에 널는 작업 => 데이터 바인딩
  // JSX 에서 태그에 디자인을 넣으려면 style={{속성명 : 속성값}}

  return (
    <div className="App">
      <div className="black-nav">
        {/* <div style={{color: 'blue'}}>블로그</div> */}
          <div>개발 blog</div>
      </div>
      <button onClick={() => {
        let copy = [...글제목];
        // ...을 붙이면 화살표(데이터 저장 경로)가 달라지는 문법이기 때문에 작동한다.
        copy[0] = '여자 코트 추천';
        글제목변경(copy);
      }}>글 수정</button>

      <button onClick={() => {
        let copy = [...글제목];
        copy.sort();
        글제목변경(copy)
      }}>정렬버튼</button>

      <div className="list">
          <h4>{글제목[0]} <span onClick={() => {따봉변경(따봉+1)}}>👍</span> {따봉} </h4>
          <p>6월 25일 작성</p>
      </div>
      <div className="list">
          <h4>{글제목[1]}</h4>
          <p>6월 25일 작성</p>
      </div>
      <div className="list">
          <h4>{글제목[2]}</h4>
          <p>6월 25일 작성</p>
      </div>
      <Modal></Modal>


    </div>
  );
}
// 컴포넌트로 만들면 좋은 것들
// 1. 반복적인 HTML 축약할때
// 2. 큰 페이지
// 3. 자주 변경되는 것들

// 컴포넌트의 단점 : state를 그냥 가져오면 문제가 생김
function Modal() {
  return (
    <div className='modal'>
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}
export default App;
