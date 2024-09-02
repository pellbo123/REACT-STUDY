import PropTypes from 'prop-types';
import { Component } from 'react';

// // 함수형 컴포넌트 익명함수
// const MyComponent = () => {
//     return <div>새로운 컴포넌트</div>
// }
// export default MyComponent


// // 함수형 컴포넌트 props
// const MyComponent = props => {
//     return <div>안녕하세요 제 이름은 {props.name} 입니다. <br/>
//     children 값은 {props.children}</div>
// }
// MyComponent.defaultProps = {
//     name : "기본 이름"
// }


// // 함수형 컴포넌트 props2
// const MyComponent = props => {
//     const {name, children} = props;
//     return <div>안녕하세요 제 이름은 {name} 입니다. <br/>
//     children 값은 {children}</div>
// }
// MyComponent.defaultProps = {
//     name : "기본 이름"
// }


// // 비구조화 할당 문법1
// const MyComponent = ({name, children}) => {
//     return <div>안녕하세요 제 이름은 {name} 입니다. <br/>
//     children 값은 {children}</div>
// }
// MyComponent.defaultProps = {
//     name : "기본 이름"
// }


// // 비구조화 할당 문법2
// const MyComponent = ({name, number, children}) => {
//     return <div>안녕하세요 제 이름은 {name} 입니다. <br/>
//     children 값은 {children} <br/>
//     제가 좋아하는 숫자는 {number}입니다.
//     </div>
// }
// MyComponent.defaultProps = {
//     name : "기본 이름"
// }
// MyComponent.propTypes = {
//     name : PropTypes.string,
//     number : PropTypes.isRequired //isRequired = PropTypes를 지정하지 않았을 때 경고를 띄우는 용도
// };

class MyComponent extends Comment {
    render() {
        const {name, number, children} = this.props;
        return (
            <div>안녕하세요 제 이름은 {name} 입니다. <br/>
            children 값은 {children} <br/>
            제가 좋아하는 숫자는 {number}입니다.
            </div>
        );
    }
}

export default MyComponent