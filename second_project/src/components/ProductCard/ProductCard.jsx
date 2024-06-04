import React from 'react'
import { Button, Card } from 'react-bootstrap'
import "./ProductCard.css";
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../../rtk/slices/cartSlice';

function ProductCard({ product }) {
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cartSlice.cart);
    console.log(cart)

    function addToCartHandler() {
        dispatch(addItem(product));
    }

    return (
        <div>
            <Card>
                <Card.Img
                    variant="top"
                    className="product__img"
                    src={product.thumbnail} />
                <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>{product.price} </Card.Text>
                    <div className='d-flex gap-3'>
                        <Button variant="primary" className='w-100' onClick={addToCartHandler}>
                            Add To Card
                        </Button>
                        <Button variant="danger" >
                            <svg fill="none" width="25px" height="25px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M2 9.1371C2 14 6.01943 16.5914 8.96173 18.9109C10 19.7294 11 20.5 12 20.5C13 20.5 14 19.7294 15.0383 18.9109C17.9806 16.5914 22 14 22 9.1371C22 4.27416 16.4998 0.825464 12 5.50063C7.50016 0.825464 2 4.27416 2 9.1371Z" fill="white"></path> </g></svg>
                        </Button>
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}

export default ProductCard