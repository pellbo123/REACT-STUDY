import { configureStore,createSlice } from "@reduxjs/toolkit";

let user = createSlice({
    name : 'user',
    initialState : {name : 'kim', age : 20},
    reducers : {
        changeName(state, myname) {
            
            state.name = myname.payload
        },
        addAge(state, myage){
            state.age += myage.payload
        }
    }
})
export let {changeName, addAge} = user.actions
let stock = createSlice({
    name : 'stock',
    initialState : [10,11,12]
})
let cart = createSlice({
    name : 'cart',
    initialState : [
        {id : 0, name : 'white and black', count : 2 , defaultCount : 2},
        {id : 2, name : 'Grey Yordan', count : 1, defaultCount : 1},
    ],
    reducers : {
        addCount(state, action) {
            state[action.payload].count++
        },
        minusCount(state, action) {
            if (state[action.payload].count > state[action.payload].defaultCount){
                state[action.payload].count--
            }
        }
    }
})
export let {addCount,minusCount} = cart.actions

export default configureStore({
    reducer : {
        user : user.reducer,
        stock : stock.reducer,
        cart : cart.reducer
    }
})