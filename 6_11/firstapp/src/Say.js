// 배열 비구조화 할당
// 기본 배열의 선언 방식을 보면 const array = [1,2]; 선언한다.
// 이 배열의 값을 변수에 할당하려면 const one = [0] // const two = [1] 이런식
// 배열 비구조화 할당을 하면 const [one,two] = array
// 따라서 배열의 값을 쉽게 추출할 수 있다.
// -------------------------------------------------------------------------
// state의 올바른 사용
// const [object,setObject] = useState({a:1,b:1});
// object.b = 2; <= (X)
// setObject({a:1, b:2}) <= (O)
// 무조건 세터 사용

import { useState } from "react";

const Say = () => {
    const [message, setMessage] = useState(''); //useState는 초기값을 넣어 주어야 함
    // 배열의 첫번째(message => 현재상태) 배열의 두번째 (setMessage => 상태를 바꾸어주는 함수)
    // 배열의 두번째를 셑어(setter) 라는 이름으로 부르기도 한다.
    const onClickEnter = () => setMessage('안녕하세요');
    const onClickLeave = () => setMessage('안녕히 가세요');

    const [color, setColor] = useState('white');

    return (
        <div>
            <button style={{color : 'red'}} onClick={onClickEnter}>입장</button>
            <button style={{color : 'blue'}} onClick={onClickLeave}>퇴장</button>
            <h1 style={{color}}>{message}</h1>

            <button style={{color : 'red'}} onClick={() => setColor('red')}>빨간색</button>
            <button style={{color : 'green'}} onClick={() => setColor('green')}>초록색</button>
            <button style={{color : 'blue'}} onClick={() => setColor('blue')}>파란색</button>
        </div>
    );
};

export default Say;