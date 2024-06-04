import React from 'react'
import { SwiperSlide, Swiper } from 'swiper/react'
import "swiper/css"
import "./ProductsSection.css"
import ProductCard from '../ProductCard/ProductCard'

function ProductsSection(props) {
    return (
        <div className='mb-4'>
            <h3 className='m-0'>{props.title}</h3>
            <Swiper
                slidesPerView={4}
                spaceBetween={20}
                loop={true}
                className="my-3"
            >
                {props.products.map(product => {
                    return (
                        <SwiperSlide key={product.id}>
                            <ProductCard product={product} />
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </div>
    )
}

export default ProductsSection