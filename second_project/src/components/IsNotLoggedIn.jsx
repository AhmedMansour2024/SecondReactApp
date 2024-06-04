import React, { Fragment } from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

function IsNotLoggedIn({ children }) {

    const isAuth = useSelector(state => state.authSlice.isAuth)
    if (isAuth) return <Navigate to="/" />
    return (
        <Fragment>{children}</Fragment>
    )
}

export default IsNotLoggedIn