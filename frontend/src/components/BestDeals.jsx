import {
    Foot_banner1,
    Foot_banner2,
    Foot_banner3,
    Foot_banner4,
} from "../assets/assets"
import ProductSlider from "./Slider";
const BestDeals = () => {
    const slides = [
        {
            id: 1,
            image: Foot_banner1,

        },
        {
            id: 2,
            image: Foot_banner2,

        },
        {
            id: 3,
            image: Foot_banner3,

        },
        {
            id: 4,
            image: Foot_banner4,

        },

    ].map((slide) => (
        <div key={slide.id} className="flex-grow-0 flex-shrink-0 w-full h-full relative">
            <img src={slide.image} alt="" className="h-full w-full object-cover rounded-md hover:scale-105 no-select no-drag " />
        </div>
    ))

    return (
        <div className="">
            <ProductSlider
                slidesPerView={6}
                autoSlide={true}
                autoSlideInterval={3000}
                loop={true}
                showDots={true}
                showArrows={true}
            >
                {slides}
            </ProductSlider>
        </div>
    );
};

export default BestDeals;