import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import "swiper/css";
import 'swiper/css/navigation';
import './carosel.css'

function Carosel() {
    return (
        <div>
            <Swiper
                slidesPerView={1}
                loop
                modules={[Navigation]}
                navigation
                className='main-carosel '
            >
                <SwiperSlide>
                    <img src='assets/images/1.jpg' className='w-100 object-fit-cover h-100' alt='' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src='assets/images/2.jpg' className='w-100 object-fit-cover h-100' alt='' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src='assets/images/3.jpg' className='w-100 object-fit-cover h-100' alt='' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src='assets/images/4.jpg' className='w-100 object-fit-cover h-100' alt='' />
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Carosel;