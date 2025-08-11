import React from 'react'
import ProductSlider from './Slider';

import {
    big_saving_1,
    big_saving_2,
    Foot_banner1,
    Foot_banner2,
    Foot_banner3,
} from "../assets/assets"

const Slide = [
    {
        id: 1,
        image: Foot_banner1,
        title: "Apple iPhone 13 128 GB Pink",
        at: "Starting At Only",
        price: 1234,

    },
    {
        id: 2,
        image: Foot_banner2,
        title: "Buy New Trend Women Black Blend Top",
        at: "Starting At Only",
        price: 1234,
    }, {
        id: 2,
        image: Foot_banner3,
        title: "Buy New Trend Women Black Blend Top",
        at: "Starting At Only",
        price: 1234,
    },

]



const BigSavingSlider = () => {
    const slides = Slide.map((num) => (
        <div
            key={num.id}
            className=" relative h-[250px] md:h-[350px] lg:h-[500px] xl:h-[600px] items-center justify-center rounded-xl shadow-lg transform no-select"
        >
            <img src={num.image} alt={num.title} className="h-full object-center rounded-md" />
        </div>
    ));

    return (
        <div className=" mx-auto">
            <ProductSlider slidesPerView={1}
                autoSlide={true}
                autoSlideInterval={5000}
                loop={true}
                showDots={true}
                showArrows={true} >
                {slides}
            </ProductSlider>
        </div>
    );
}

export default BigSavingSlider;