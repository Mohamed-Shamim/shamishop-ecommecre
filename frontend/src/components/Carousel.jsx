// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import 'swiper/css/pagination';



import { slider_1, slider_2, slider_3, slider_4, slider_5 } from "../assets/assets"

const slider = [
    {
        id: 1,
        img: slider_1,

    },
    {
        id: 2,
        img: slider_2,
        alt: "Slide 2",
    },
    {
        id: 3,
        img: slider_3,

    },
    {
        id: 4,
        img: slider_4,
    },
    {
        id: 5,
        img: slider_5,
    }
]



const Carousel = () => {
    return (
        <div className=" w-full max-w-7xl: mx-auto rounded-2xl">
            <Swiper
                modules={[Autoplay, Pagination, Navigation]}
                spaceBetween={30}
                slidesPerView={1}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                loop={true}
                pagination={{
                    clickable: true,
                    dynamicBullets: true,
                }}
                navigation
            >
                {
                    slider.map((item, index) => (
                        <SwiperSlide key={index} className='flex justify-center items-center rounded-2xl overflow-hidden'>
                            <img src={item.img} alt={item.alt} className='w-full rounded-2xl' />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    )
}

export default Carousel