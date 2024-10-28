import { Button, Table } from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import { changeName, addAge, addCount, delCount } from '../store';

function Cart() {
  // localStorage.setItem('데이터 이름', '데이터'); //추가
  // localStorage.getItem('데이터 이름'); //읽기
  // localStorage.removeItem('데이터 이름'); //삭제

  // localStorage.setItem('obj',JSON.stringify({name :'kim'}))
  // let aaa = localStorage.getItem('obj')
  // console.log(aaa);
  // let b = JSON.parse(aaa)
  // console.log(b);
    let state = useSelector((state) => state)
    let dispatch = useDispatch()
  return (
    <div>
        {state.user.name}의 장바구니
        {state.user.age}의 나이
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경하기</th>
        </tr>
        </thead>
        <tbody>
            {
                state.cart.map((a, i)=>( 
                <tr key={i}>
                    <td>1</td>
                    <td>{state.cart[i].name}</td>
                    <td>{state.cart[i].count}</td>
                    <td>하이요</td>
                    <td>
                        <Button onClick={()=>{
                            dispatch(changeName('kheum'))
                            dispatch(addAge(3))
                            dispatch(addCount(i))
                        }}>+</Button>
                        <Button onClick={()=>{
                            dispatch(delCount(i))
                        }}>-</Button>
                    </td>
                </tr>
                ))}
        </tbody>
      </Table>
    </div>
  )
}
export default Cart;