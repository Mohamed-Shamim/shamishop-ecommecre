import React from 'react'
import Carousel from '../components/Carousel'
import "swiper/css"
import "swiper/css/navigation"
import 'swiper/css/pagination';
import HomeCategories from '../components/HomeCategories';
import PopularProduct from '../components/PopularProduct';
import BigSavingSlider from '../components/BigSavingSlider';
import { big_saving_3, big_saving_4, delivery_car, } from '../assets/assets';
import LatestProducts from '../components/LatestProducts';
import FeaturedProducts from '../components/FeaturedProducts';
import BestDealsSlide from '../components/BestDeals';
import WellnessProduct from '../components/WellnessProduct';
import ElectronicsProduct from '../components/ElectronicsProduct';
import Footer from '../components/Footer';


const Home = () => {
  return (
    <div className="">

      <div className="bg-[#F5F0F0] relative">
        <div className='mx-auto w-[90%] '>
          <div className=" pt-5">
            <Carousel />
          </div>
          <div className="py-10">
            <HomeCategories />
          </div>
        </div>
      </div>
      <PopularProduct />
      <div className="md:flex container justify-between items-center gap-4 py-10 ">
        <div className="md:w-[65%] w-full mx-auto">
          <BigSavingSlider />
        </div>
        <div className=" mx-auto relative md:block hidden xl:h-[600px]  ">
          <div className="relative overflow-hidden w-full items-end ">
            <img src={big_saving_3} alt="" className='hover:scale-105 transition duration-300 object-cover object-center h-[125px] md:h-[175px] lg:h-[250px] xl:h-[300px]' />
            <span className='absolute top-4 left-65 text-[20px] font-semibold leading-7'>Buy Apple iPhone</span>
            <span className="text-sm absolute top-12 left-65 max-w-[45%] text-[16px] font-semibold ">Get 25% off</span>
            <span className='absolute top-18 left-65 text-[20px] text-[#ff700a] font-semibold'>$3.00</span>
            <button className='absolute top-27 left-65 max-w-[45%] bg-[#ff700a] hover:[#] px-4 py-2 rounded-md cursor-pointer hover:underline'>SHOP NOW</button>
          </div>
          <div className="mt-6 relative w-full overflow-hidden  ">
            <img src={big_saving_4} alt="" className=' hover:scale-105 transition duration-300 h-[125px] md:h-[175px] lg:h-[250px] xl:h-[300px]' />
            <span className='absolute top-4 left-4 text-[20px] font-semibold leading-7'>Buy Apple iPhone</span>
            <span className="text-sm absolute top-12 left-4 max-w-[45%] text-[16px] font-semibold ">Get 25% off</span>
            <span className='absolute top-18 left-4 text-[20px] text-[#ff700a] font-semibold'>$3.00</span>
            <button className='absolute top-27 left-4 max-w-[45%] bg-[#ff700a] px-4 py-2 hover:underline rounded-md cursor-pointer'>SHOP NOW</button>
          </div>
        </div>

      </div>
      <div className="container md:w-[80%] border-2 border-[#ff700a]  mt-2 py-2">
        <div className="flex items-center justify-between ">
          <div className="flex items-center gap-4 ">
            <img src={delivery_car} alt="" className='lg:h-[50px] lg:w-[50px] md:h-[35px] h-[25px] ' />
            <span className='uppercase lg:text-[20px] md:text-[16px] text-[10px] font-semibold text-[#3e3e3e]' >Free Shipping</span>
          </div>
          <p className='text-black/90 lg:text-[16px] md:text-[10px] text-[8px] font-semibold'>Free Delivery Now On Your First Order and over $200</p>
          <h1 className='text-black font-extrabold lg:text-[22px] md:text-[18px] text-[14px] '>- Only $200*</h1>
        </div>
      </div>

      <div className="mt-6">
        <LatestProducts />
        <FeaturedProducts />
      </div>
      <div className="mx-auto container mt-6">
        <BestDealsSlide />

      </div>
      <div className="mt-6">
        <WellnessProduct />
      </div>
      <div className="mt-6">
        <ElectronicsProduct />
      </div>
    </div>
  )
}

export default Home