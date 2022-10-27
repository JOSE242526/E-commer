import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import getConfig from "../../utils/getConfig";

const cartSlice = createSlice({
    name: "cart",
    initialState: null,
    reducers: {
        setCartGlobal: (state, action) => action.payload
    }
})

export const { setCartGlobal } = cartSlice.actions

export default cartSlice.reducer

export const getAllCart = () => (dispatch) => {
    const URL = `https://ecommerce-api-react.herokuapp.com/api/v1/cart`
        return axios.get(URL, getConfig())
        .then(res => {
            dispatch(setCartGlobal(res.data.data.cart))
            console.log(res.data)
        })
        .catch(err => console.log(err))
}