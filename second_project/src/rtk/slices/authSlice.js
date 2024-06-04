import { createSlice } from "@reduxjs/toolkit";

const localStorageData = JSON.parse(localStorage.getItem('loggedInUser')) || null;


const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isAuth: localStorageData ? true : false,
        loggedInData: localStorageData,
    },
    reducers: {
        login: (state, actions) => {
            state.isAuth = true;
            state.loggedInData = actions.payload;
            localStorage.setItem('loggedInUser', JSON.stringify(actions.payload));
        },
        logout: (state, actions) => {
            state.isAuth = false;
            state.loggedInData = null;
            localStorage.removeItem('loggedInUser')
        },
    }
})

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;