import { Button, Table } from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import { changeName } from '../store';

function Cart() {
    let state = useSelector((state) => state)
    let dispatch = useDispatch()
  return (
    <div>
        {state.user}의 장바구니
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
                            dispatch(changeName())
                        }}>+</Button>
                    </td>
                </tr>
                ))}
        </tbody>
      </Table>
    </div>
  )
}
export default Cart;