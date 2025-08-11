import React, { useContext, useEffect, useRef, useState } from 'react'
import { ProductContext } from '../context/ProductContext';
import ProductItem from './productItem';

const ElectronicsProduct = () => {
    const { productData } = useContext(ProductContext)
    const [electronics, setLatestProduct] = useState([])

    // drag slider
    const sliderRef = useRef(null);

    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    const [showPrev, setShowPrev] = useState(true);
    const [showNext, setShowNext] = useState(true);


    useEffect(() => {
        const electronics = productData.filter((item) => (item.electronics === true))
        setLatestProduct(electronics)

    }, [])
    // drag slider
    const handleMouseDown = (e) => {
        setIsDragging(true);
        setStartX(e.pageX - sliderRef.current.offsetLeft);
        setScrollLeft(sliderRef.current.scrollLeft);
    };

    const handleMouseLeave = () => setIsDragging(false);
    const handleMouseUp = () => setIsDragging(false);

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - sliderRef.current.offsetLeft;
        const walk = (x - startX) * 2; // scroll speed
        sliderRef.current.scrollLeft = scrollLeft - walk;
    };

    const scrollBy = (distance) => {
        sliderRef.current.scrollBy({
            left: distance,
            behavior: 'smooth',
        });
    };

    const checkButtons = () => {
        const el = sliderRef.current;
        setShowPrev(el.scrollLeft > 0);
        setShowNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 1);
    };

    useEffect(() => {
        const slider = sliderRef.current;

        const handleScroll = () => checkButtons();
        slider.addEventListener('scroll', handleScroll);

        // Delay initial check to allow layout
        const timer = setTimeout(() => {
            checkButtons();
        }, 100); // adjust if needed

        return () => {
            clearTimeout(timer);
            slider.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className='py-4 container' >
            <div className="items-start" >
                <h1 className='text-[20px] md:text-[24px] text-[#363636] font-semibold'> Electronics Product</h1>
            </div>

            {/* Rendering Product */}
            <div className="relative flex items-center justify-between mt-4">
                {showPrev && (
                    <button
                        onClick={() => scrollBy(-470)}
                        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white shadow p-2 rounded-full cursor-pointer"
                    >
                        ◀
                    </button>
                )}

                {/* Next Button  */}
                {showNext && (
                    <button
                        onClick={() => scrollBy(470)}
                        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white shadow p-2 rounded-full cursor-pointer"
                    >
                        ▶
                    </button>
                )}

                <div className="flex gap-4 overflow-x-scroll no-scrollbar scroll-smooth"
                    ref={sliderRef}
                    onMouseDown={handleMouseDown}
                    onMouseLeave={handleMouseLeave}
                    onMouseUp={handleMouseUp}
                    onMouseMove={handleMouseMove}
                >

                    {
                        electronics.map((item) => (
                            <div className="flex-shrink-0" key={item} >
                                <ProductItem id={item._id} image={item.image} name={item.name} price={item.price} offerPrice={item.offerPrice} rating={item.rating} offPrice={item.offPrice} productData={item.productData} brands={item.brands} />

                            </div>
                        )
                        )}
                </div>
            </div>
        </div>
    )
}



export default ElectronicsProduct