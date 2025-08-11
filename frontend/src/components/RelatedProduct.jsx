import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import ProductItem from './productItem';

const RelatedProductsSlider = ({ relatedProducts }) => {
    const sliderRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    const [showPrev, setShowPrev] = useState(false);
    const [showNext, setShowNext] = useState(true);

    // Handle scroll button visibility
    const checkScroll = () => {
        const slider = sliderRef.current;
        setShowPrev(slider.scrollLeft > 0);
        setShowNext(slider.scrollLeft < slider.scrollWidth - slider.clientWidth);
    };

    // Button scroll handler
    const scrollBy = (distance) => {
        const slider = sliderRef.current;
        slider.scrollBy({ left: distance, behavior: 'smooth' });
        setTimeout(checkScroll, 400);
    };



    // Drag scroll handlers
    const handleMouseDown = (e) => {
        setIsDragging(true);
        setStartX(e.pageX - sliderRef.current.offsetLeft);
        setScrollLeft(sliderRef.current.scrollLeft);
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - sliderRef.current.offsetLeft;
        const walk = (x - startX) * 2; // Adjust multiplier for scroll speed
        sliderRef.current.scrollLeft = scrollLeft - walk;
        checkScroll();
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleMouseLeave = () => {
        setIsDragging(false);
    };
    useEffect(() => {
        const slider = sliderRef.current;

        const handleScroll = () => checkScroll();
        slider.addEventListener('scroll', handleScroll);

        // Delay initial check to allow layout
        const timer = setTimeout(() => {
            checkScroll();
        }, 100); // adjust if needed

        return () => {
            clearTimeout(timer);
            slider.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="mt-8">
            <div className="items-start">
                <h1 className='text-[20px] md:text-[24px] text-[#363636] font-semibold'>Popular Products</h1>
                <p className='text-[16px] text-black/75 mt-1'>Do not miss the current offers until the end of March.</p>
            </div>

            <div className="relative mt-4">
                {showPrev && (
                    <button
                        onClick={() => scrollBy(-470)}
                        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white shadow p-2 rounded-full cursor-pointer"
                    >
                        ◀
                    </button>
                )}

                {showNext && (
                    <button
                        onClick={() => scrollBy(470)}
                        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white shadow p-2 rounded-full cursor-pointer"
                    >
                        ▶
                    </button>
                )}

                <div
                    className="flex gap-4 overflow-x-auto no-scrollbar scroll-smooth"
                    ref={sliderRef}
                    onScroll={checkScroll}
                    onMouseDown={handleMouseDown}
                    onMouseMove={handleMouseMove}
                    onMouseUp={handleMouseUp}
                    onMouseLeave={handleMouseLeave}
                    style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
                >
                    {relatedProducts.map((item) => (
                        <Link
                            to={`/product/${item._id}`}
                            className="flex-shrink-0"
                            key={item._id}
                        >
                            <ProductItem
                                id={item._id}
                                image={item.image}
                                name={item.name}
                                price={item.price}
                                offerPrice={item.offerPrice}
                                rating={item.rating}
                                offPrice={item.offPrice}
                                brands={item.brands}
                                item={item}
                            />
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default RelatedProductsSlider;
