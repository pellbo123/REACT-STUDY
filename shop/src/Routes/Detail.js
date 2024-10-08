import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from 'styled-components'
import { Nav } from "react-bootstrap";
import '../App.css';


// let Box = styled.div`
//     padding : 20px;
//     color : grey;
//     `;
// let YelloBtn = styled.button`
//     background : ${props => props.bg};
//     color : black;
//     padding : 10px;
//     `;
function TabContent(props) {
    let [fade, setFade] = useState('')
    useEffect(()=>{
        setTimeout(()=>{setFade('end')}, 100)
    return () => {
        setFade('')
    }
    }, [props.탭])
    return (
        <div className={'start '+ fade}>
            {[<div>내용0</div>, <div>내용1</div>, <div>내용2</div>][props.탭]}
        </div>
    )
}

function Detail (props) {
    
    // let [alert, setAlert] = useState(true)
    // useEffect(() => {
    //     let timer = setTimeout(() => {
    //         setAlert(false)
    //     }, 2000);

    //     return () => {
    //         clearTimeout(timer);
    //     }
    // }, [] )

    // let [count, setCount] = useState(0);

    let {id} = useParams();
    let myItem = props.shoes.find(function(x) {
        return x.id == id
        });

        let [탭, 탭변경] = useState(0)

        let [fade2, setFade2] = useState('')

        useEffect(()=>{
            setTimeout(()=>{setFade2('end')}, 100)
        return () => {
            setFade2('')
        }
        }, [])

    return (
        <div className={'container start ' + fade2}>
            <div className="row">
                <div className="col-md-6">
                    <img src="/shoe1.png"></img>
                </div>
                <div className="col-md-6">
                    <h4 className="pt-5">{myItem.title}</h4>
                    <p>{myItem.content}</p>
                    <p>{myItem.price}</p>
                    <button className="btn btn-danger">주문하기</button>
                </div>
                {/* <div> */}
                    {/* <Box> */}
                        {/* <YelloBtn bg="orange" onClick={()=>{setCount(count+1)}}>오렌지버튼 </YelloBtn> */}
                        {/* <YelloBtn bg="blue">파란 버튼</YelloBtn> */}
                        {/* { alert == true ? <YelloBtn>2초 후 사라짐</YelloBtn> : null } */}
                    {/* </Box> */}
                {/* </div> */}
                <div>
                    <Nav variant="tabs" defaultActiveKey="link0">
                        <Nav.Item>
                            <Nav.Link onClick={()=>{탭변경(0)}} eventKey="link0">버튼 0</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link onClick={()=>{탭변경(1)}} eventKey="link1">버튼 1</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link onClick={()=>{탭변경(2)}} eventKey="link2">버튼 2</Nav.Link>
                        </Nav.Item>
                    </Nav>
                    <TabContent 탭={탭}/>
                </div>
            </div>
        </div>
    )
}

export default Detail;