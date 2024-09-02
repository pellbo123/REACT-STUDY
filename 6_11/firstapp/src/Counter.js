import { Component } from "react";

class Counter extends Component {
    // constructor로 state 만들기
    // constructor(props) {
    //     super(props);
    //     // state의 초기값
    //     this.state = {
    //         number : 0,
    //         fixedNumber : 100
    //     };
    // }
    state = {
        number : 0,
        fixedNumber : 100
    };
    render() {
        const {number, fixedNumber} = this.state;
        return (
            <div>
                <h1>{number}</h1>
                <h2>고정된 숫자 : {fixedNumber}</h2>
                <button
                    onClick={() => {
                        // this.setState({number : number+1})
                        // // setstate를 사용한다고 해서 값이 바로 바뀌는건 아님
                        // this.setState({number : this.state.number +1});

                        // this.setState(preveState => ({
                        //     number : preveState.number + 1
                        // }));
                        this.setState(
                            {
                            number : number+1
                            },
                            () => {
                                console.log("방금 setState를 호출했습니다.");
                                console.log(this.state);
                            }
                        )
                    }}
                >ButtonClick</button>
            </div>
        )
    }
}
export default Counter;