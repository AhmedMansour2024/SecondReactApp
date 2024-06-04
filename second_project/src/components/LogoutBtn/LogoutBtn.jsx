import React from 'react'
import { Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { logout } from '../../rtk/slices/authSlice';

function LogoutBtn() {
    const dispatch = useDispatch();
    function logoutHandler() {
        dispatch(logout());
    }
    return (
        <Button onClick={logoutHandler}>Logout</Button>
    )
}

export default LogoutBtn