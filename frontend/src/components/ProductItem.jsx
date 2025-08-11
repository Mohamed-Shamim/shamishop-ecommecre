import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { ProductContext } from '../context/ProductContext'
import { cart, heart, swap } from '../assets/assets'
import StarRating from './Rating'
import { useCart } from '../context/CartContext'
import { toast } from "react-toastify"

const ProductItem = ({ id, image, name, offPrice, rating, price, offerPrice, brands, }) => {
    const { currency } = useContext(ProductContext)
    const [hovered, setHovered] = useState(false);
    const [isAdding, setIsAdding] = useState(false);

    const { addToCart } = useCart();

    const handleAddToCart = () => {
        setIsAdding(true)



        const product = {
            id: id,
            name: name,
            price: price,
            image: image[0],
            quantity: 1,
            offerPrice: offPrice,
            brands: brands,
            rating: rating

        }

        setTimeout(() => {
            addToCart(product);
            setIsAdding(false)
            toast.success(`${name} added to cart!`, {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })


        }, 1000)
    }

    return (

        <div className='relative bg-white flex flex-col items-center justify-center w-[220px]  rounded-md shadow-md'>
            <div className="w-[220px]  border border-[#E0E0E0] items-center justify-center flex-col rounded-md shadow-md overflow-hidden no-select"

            >
                <Link to={`/product/${id}`}

                >
                    <div className=" flex flex-col justify-center items-center relative h-[260px]   no-select"
                        onMouseEnter={() => setHovered(true)}
                        onMouseLeave={() => setHovered(false)}
                    >
                        <img src={image[0]} alt={name} className={`absolute inset-0  h-full scale-100 w-full tran object-cover transition-all duration-500 transform cursor-pointer ${hovered ? "opacity-0 no-drag" : "opacity-100 scale-90"} `} draggable={false} />
                        <img src={image[1]} alt={name} className={`h-full w-full object-cover no-drag object-center  transition-all duration-500 inset-0 cursor-pointer ${hovered ? "opacity-100 no-drag" : "opacity-0 scale-90"} `} draggable={false} />
                        <div className={`absolute top-2 left-2 bg-[#FF6B01] text-white px-2 py-1 rounded-xl text-sm ${offPrice > 20 ? " bg-green-500" : "bg-[#FF6B01]"}`}>{offPrice}%</div>
                        <div className={` ${hovered ? "opacity-100 transition-opacity duration-500 " : "opacity-0 scale-90"}`}
                        >
                            <div className="absolute top-2 right-2 flex items-center justify-center p-2 cursor-pointer h-[35px] w-[35px] rounded-full bg-white transition-all duration-300 transform hover:bg-[#FF6B01] text-white">
                                <img src={heart} alt="" className=' h-full object-cover object-center' />
                            </div> <div className="absolute top-13 right-2 flex items-center justify-center p-2 cursor-pointer h-[35px] w-[35px] rounded-full transition-all duration-300 transform bg-white hover:bg-[#FF6B01] text-white">
                                <img src={swap} alt="" className=' h-full object-cover object-center' />
                            </div> <div className="absolute top-24 right-2 flex items-center justify-center p-2 cursor-pointer h-[35px] w-[35px] rounded-full bg-white transition-all duration-300 transform hover:bg-[#FF6B01] text-white">
                                <img src={heart} alt="" className=' h-full object-cover object-center' />
                            </div>
                        </div>
                    </div>
                </Link>
                <div className="p-2 no-select">
                    <span className='text-[12px] text-black/60 font-semibold'>{brands}</span>
                    <h1 className='text-[#363636] text-[16px] font-semibold mt-1'>{name.length > 20 ? name.slice(0, 21) + "..." : name}</h1>
                    <div className='flex items-center gap-1 mt-2'>
                        <StarRating rating={rating} />
                    </div>
                    <div className='flex items-center gap-4 m-1'>
                        <span className='text-[#FF6B01] text-[20px] font-semibold'>{currency}{price}.00</span>
                        <span className='text-[#BDBDBD] text-[20px] line-through'>{currency}{offerPrice}.00</span>
                    </div>
                </div>
                <button
                    className={`flex gap-2 items-center justify-center m-2 buttonCard cursor-pointer ${isAdding ? 'opacity-100 cursor-not-allowed' : ''
                        }`}
                    onClick={handleAddToCart}
                    disabled={isAdding}
                >
                    {isAdding ? (
                        <>
                            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-100" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Adding...
                        </>
                    ) : (
                        <>
                            <img src={cart} alt="" className='h-5' />
                            Add to Cart
                        </>
                    )}
                </button>
            </div>
        </div>
    )
}

export default ProductItem