// 특정 파일을 불러오는 코드
// import logo from './logo.svg';
// import './App.css';
import { Fragment } from "react";
const name = '리액트';
const test = 'undefine'

const style = {
  backGroundColor : 'black',
  color : 'aqua',
  fontSize : '40px',
  padding : 16
};

// JavaScript XML
function App() {
  return ( // React Component
    // test || '값이 undefined입니다.'
    <Fragment>
      {/* Fragment <- JSX */}
      {/* 조건부 연산자 
      {name === '리액트' ? (
        <h1>리액트 입니다.</h1>
      ) : (
        <h1>리액트가 아닙니다.</h1>
      )}
      */}

      {/* And 연산자를 사용한 조건부 렌더링
      {name === '리액트' && <h1>리액트 입니다.</h1>}
      */}
      {/* {test} */}
      <div style={style}>{name}</div>
    </Fragment>
  );
}

export default App;
