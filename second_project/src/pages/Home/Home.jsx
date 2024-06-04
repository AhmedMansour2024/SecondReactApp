import React, { useEffect, useState } from 'react'
import Carosel from '../../components/Swiper/Carosel';
import { Container } from 'react-bootstrap';
import ProductsSection from '../../components/ProductsSection/ProductsSection';

function Home() {
    const [products, setProducts] = useState([]);

    async function getProductsApi() {
        const res = await fetch('http://localhost:3000/products')
        const data = await res.json()
        console.log(data)
        setProducts(data)
    }

    useEffect(() => {
        getProductsApi()
    }, [])

    return (
        <div>
            <Container>
                <Carosel />
                <ProductsSection title="Latest Products" products={products.slice(0, 14)} />
                <ProductsSection title="Offers" products={products.slice(14, 30)} />
            </Container>
        </div>
    )
}

export default Home;