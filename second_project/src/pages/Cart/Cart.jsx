import React from 'react'
import CartHeader from '../../components/CartHeader/CartHeader'
import CartList from '../../components/CartList/CartList'

function Cart() {
    return (
        <div className='cart-cont container mt-5'>
            < CartHeader />
            < CartList />
        </div>
    )
}

export default Cart