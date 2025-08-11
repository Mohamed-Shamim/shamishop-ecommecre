import { useState, useEffect, useRef, Children } from 'react';

const ProductSlider = ({
    children,
    slidesPerView = 1,
    autoSlide = false,
    autoSlideInterval = 3000,
    loop = true,
    showDots = true,
    showArrows = true,
}) => {
    const slides = Children.toArray(children);
    const [currentIndex, setCurrentIndex] = useState(loop ? slidesPerView : 0);
    const [startX, setStartX] = useState(null);
    const [isDragging, setIsDragging] = useState(false);
    const [transitionEnabled, setTransitionEnabled] = useState(true);
    const carouselRef = useRef(null);
    const intervalRef = useRef(null);
    const isTransitioning = useRef(false);

    // Prepare slides for looping
    const extendedSlides = loop
        ? [...slides.slice(-slidesPerView), ...slides, ...slides.slice(0, slidesPerView)]
        : slides;

    // Calculate slide width based on slidesPerView
    const slideWidth = 100 / slidesPerView;
    const containerWidth = extendedSlides.length * slideWidth;

    // Auto-slide functionality
    useEffect(() => {
        if (!autoSlide || slides.length < slidesPerView) return;

        const startInterval = () => {
            intervalRef.current = setInterval(() => {
                if (!isDragging && !isTransitioning.current) {
                    handleNext();
                }
            }, autoSlideInterval);
        };

        startInterval();
        return () => clearInterval(intervalRef.current);
    }, [autoSlide, autoSlideInterval, isDragging, slides.length, slidesPerView]);



    const handleNext = () => {
        if (isTransitioning.current) return;
        isTransitioning.current = true;

        setCurrentIndex(prev => {
            const newIndex = prev + 1;

            // Handle loop transition
            if (loop && newIndex >= extendedSlides.length - slidesPerView) {
                setTimeout(() => {
                    setTransitionEnabled(false);
                    setCurrentIndex(1);
                    setTimeout(() => {
                        setTransitionEnabled(true);
                        isTransitioning.current = false;
                    }, 50);
                }, 500);
            } else if (!loop && newIndex > slides.length - slidesPerView) {
                isTransitioning.current = false;
                return slides.length - slidesPerView;
            } else {
                setTimeout(() => {
                    isTransitioning.current = false;
                }, 500);
            }

            return newIndex;
        });
    };

    const handlePrev = () => {
        if (isTransitioning.current) return;
        isTransitioning.current = true;

        setCurrentIndex(prev => {
            const newIndex = prev - 1;

            // Handle loop transition
            if (loop && newIndex < 0) {
                setTimeout(() => {
                    setTransitionEnabled(false);
                    setCurrentIndex(slides.length);
                    setTimeout(() => {
                        setTransitionEnabled(true);
                        isTransitioning.current = false;
                    }, 50);
                }, 500);
            } else if (!loop && newIndex < 0) {
                isTransitioning.current = false;
                return 0;
            } else {
                setTimeout(() => {
                    isTransitioning.current = false;
                }, 500);
            }

            return newIndex;
        });
    };

    const handleTouchStart = (e) => {
        setIsDragging(true);
        setStartX(e.touches ? e.touches[0].clientX : e.clientX);
        if (autoSlide) clearInterval(intervalRef.current);
    };

    const handleTouchMove = (e) => {
        if (!startX || isTransitioning.current) return;
        const currentX = e.touches ? e.touches[0].clientX : e.clientX;
        const diff = startX - currentX;

        if (Math.abs(diff) > 50) {
            if (diff > 0) {
                handleNext();
            } else {
                handlePrev();
            }
            setStartX(null);
        }
    };

    const handleTouchEnd = () => {
        setIsDragging(false);
        setStartX(null);
        if (autoSlide) {
            clearInterval(intervalRef.current);
            intervalRef.current = setInterval(() => {
                if (!isDragging && !isTransitioning.current) {
                    handleNext();
                }
            }, autoSlideInterval);
        }
    };

    const goToSlide = (index) => {
        if (isTransitioning.current) return;
        setCurrentIndex(loop ? index + slidesPerView : index);
        if (autoSlide) {
            clearInterval(intervalRef.current);
            intervalRef.current = setInterval(() => {
                if (!isDragging && !isTransitioning.current) {
                    handleNext();
                }
            }, autoSlideInterval);
        }
    };

    const getDisplayIndex = () => {
        if (!loop) return currentIndex;
        if (currentIndex <= slidesPerView) return 0;
        if (currentIndex >= slides.length + slidesPerView) return slides.length - slidesPerView;
        return currentIndex - slidesPerView;
    };

    // Calculate visible range for dots
    const maxDotIndex = slides.length - slidesPerView;

    return (
        <div className="relative w-full overflow-hidden group">
            <div
                className="relative w-full"
                ref={carouselRef}
                onMouseDown={handleTouchStart}
                onMouseMove={handleTouchMove}
                onMouseUp={handleTouchEnd}
                onMouseLeave={handleTouchEnd}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
            >
                <div
                    className={`flex ${transitionEnabled ? 'transition-transform duration-500 ease-in-out' : ''}`}
                    style={{
                        transform: `translateX(-${currentIndex * slideWidth}%)`,
                        width: `${containerWidth}%`
                    }}
                >
                    {extendedSlides.map((slide, index) => (
                        <div
                            key={`${index}-${getDisplayIndex()}`}
                            className="flex-shrink-0 px-2" // Added padding between slides
                            style={{ width: `${slideWidth}%` }}
                        >
                            {slide}
                        </div>
                    ))}
                </div>
            </div>

            {/* Navigation arrows */}
            {showArrows && slides.length > slidesPerView && (
                <>
                    <button
                        onClick={handlePrev}
                        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/30 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity z-10"
                        aria-label="Previous slide"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <button
                        onClick={handleNext}
                        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/30 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity z-10"
                        aria-label="Next slide"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </>
            )}

            {/* Pagination dots - only show if there are multiple slides to navigate */}
            {showDots && maxDotIndex > 0 && (
                <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                    {Array.from({ length: maxDotIndex + 1 }).map((_, index) => (
                        <button
                            key={index}
                            className={`w-2 h-2 rounded-full transition-all ${index === getDisplayIndex() ? 'bg-white w-4' : 'bg-gray-400'
                                }`}
                            onClick={() => goToSlide(index)}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};


export default ProductSlider;