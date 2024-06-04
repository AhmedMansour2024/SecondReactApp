import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cart: localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [],
    },
    reducers: {
        addItem: (state, action) => {
            const obj = state.cart.find((ele) => ele.id == action.payload.id);
            if (obj) {
                obj.quantity++;
            } else {
                state.cart.push({ ...action.payload, quantity: 1 });
            }
            localStorage.setItem("cart", JSON.stringify(state.cart));
        },
        removeItem: (state, action) => {
            state.cart = state.cart.filter((ele) => ele.id != action.payload);
            localStorage.setItem("cart", JSON.stringify(state.cart));
        },
        removeAllItems: (state) => {
            state.cart = [];
            localStorage.removeItem("cart", JSON.stringify(state.cart));
        },
        increaseQuantity: (state, action) => {
            const obj = state.cart.find((ele) => ele.id === action.payload);
            obj.quantity++;
            localStorage.setItem("cart", JSON.stringify(state.cart));
        },
        decreaseQuantity: (state, action) => {
            const obj = state.cart.find((ele) => ele.id === action.payload);
            if (obj.quantity > 1) {
                obj.quantity--;
            }
            localStorage.setItem("cart", JSON.stringify(state.cart));
        },
    },
});

export const {
    addItem,
    removeItem,
    removeAllItems,
    increaseQuantity,
    decreaseQuantity,
} = cartSlice.actions;
export default cartSlice.reducer;