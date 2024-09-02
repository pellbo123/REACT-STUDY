// EventPractice.js
// 컴포넌트 클래스/함수 클래스 컴포넌트 연습을 위해 클래스로 만듬
import { Component } from "react";

class EventPractice extends Component {
    state = {
        message : ''
    }
    render() {
        return (
            <div>
                <h1>이벤트 연습</h1>
                <input
                    type="text"
                    name="message"
                    placeholder="아무거나 입력하에요"
                    value={this.state.message}
                    onChange={
                        (e) => {
                            this.setState({
                                message : e.target.value
                            })
                        }
                    }>
                </input>
                
                <button onClick={
                    () => {
                        alert(this.state.message);
                        this.setState({
                            message : ''
                        });
                    }
                }>확인하기</button>
            </div>
        );
    }
}
export default EventPractice;