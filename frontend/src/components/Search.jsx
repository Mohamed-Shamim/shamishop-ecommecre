import React from 'react'
import { search } from '../assets/assets'

const Search = () => {
  return (
    <div className=" w-full md:h-[50px] h-[40px] bg-[#F5F0F0] rounded-md relative p-2 items-center justify-center ">
      <div className="">
        <input
          className="w-full pl-5 pr-10 lg:text-base text-sm md:mt-1 bg-transparent rounded-md border-none focus:outline-none "
          type="text"
          placeholder="Search products..."
        />
      </div>
      <button className=" button absolute cursor-pointer flex items-center right-0 top-0 h-full xl:w-8 lg:w-6 md:w-4 sm:w-2.5 w-2  rounded-md text-white text-sm font-medium focus:outline-none">
        <img src={search} alt="" className='md:mb-2 mb-4' />
      </button>

    </div>
  )
}

export default Search