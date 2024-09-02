import logo from './logo.svg';
import './App.css';
import {Component} from 'react'; // {} 중괄호는 클래스를 가져 온다는 뜻
import MyComponent from './MyComponent'
// 6_10 추가
import Counter from './Counter';

const App = () => {
  return <Counter />;
};

// // 함수 컴포넌트 선언
// function App() {
//   const name = '리액트';
//   return <div className='react'> {name}</div>;
// }


// // 함수 컴포넌트 선언2 (익명 함수)
// function App() {
//   return <MyComponent/>
// }


// // 함수 컴포넌트 선언3 (props)
// function App() {
//   return <MyComponent name='react'/>
// }


// // 함수 컴포넌트 선언4
// function App() {
//   return <MyComponent>리액트</MyComponent>
// }


// // 함수 컴포넌트 선언5
// function App() {
//   return <MyComponent name={3}>리액트</MyComponent>
// }


// // 클래스형 컴포넌트
// // state 기능을 사용할수가 있다.
// class App extends Component{
//   render() {
//     const name = 'react';
//     return <div className='react'>{name}</div>
//   }
// }


// 클래스형 컴포넌트
// state 기능을 사용할수가 있다.
// class App extends Component{
//   render() {
//     const name = 'react';
//     return <div className='react'>{name}</div>
//   }
// }

export default App;
