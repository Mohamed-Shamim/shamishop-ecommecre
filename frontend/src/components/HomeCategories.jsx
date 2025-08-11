import React from 'react'
import { homeFashion } from '../constants'

const HomeCategories = () => {
    return (
        <div className='relative'>
            <div className="flex gap-4 items-start justify-start overflow-x-scroll no-scrollbar">
                {
                    homeFashion.map((item) => (
                        <div className="bg-white flex items-center justify-center text-center w-full" key={item.id}>
                            <div className="xl:h-[120px] xl:w-[100px] lg:h-[100px] lg:w-[90px] md:h-[90px] w-[70px] h-[80px] flex flex-col items-center justify-center">
                                <img src={item.img} alt={item.alt} className='xl:h-[60px] lg:h-[50px] md:h-[40px] h-[30px] hover:scale-110 transition-all duration-300 cursor-pointer ' />
                                <h1 className='mt-2 text-[12px] md:text-[14px] lg:text-[16px]'>{item.title}</h1>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default HomeCategories