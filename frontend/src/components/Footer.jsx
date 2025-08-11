import React from 'react'
import { FooterMenu } from '../constants'
import { Link } from 'react-router-dom'
import { american_express, carte_bleue, paypal, visa } from '../assets/assets'

const Footer = () => {
  return (
    <>
      <div className="mt-20 mx-auto md:w-[70%]">
        <div className=" flex flex-wrap items-center justify-center lg:justify-between gap-4">
          <div className="group-hover flex flex-col items-center justify-center cursor-pointer text-center h-[120px] px-2 ">
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 32 32" class="md:text-[25px] xl:text-[40px] lg:text-[35px] text-[20px] transition-all duration-300 hover:text-primary group-hover:-translate-y-1" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
              <path d="M 0 6 L 0 8 L 19 8 L 19 23 L 12.84375 23 C 12.398438 21.28125 10.851563 20 9 20 C 7.148438 20 5.601563 21.28125 5.15625 23 L 4 23 L 4 18 L 2 18 L 2 25 L 5.15625 25 C 5.601563 26.71875 7.148438 28 9 28 C 10.851563 28 12.398438 26.71875 12.84375 25 L 21.15625 25 C 21.601563 26.71875 23.148438 28 25 28 C 26.851563 28 28.398438 26.71875 28.84375 25 L 32 25 L 32 16.84375 L 31.9375 16.6875 L 29.9375 10.6875 L 29.71875 10 L 21 10 L 21 6 Z M 1 10 L 1 12 L 10 12 L 10 10 Z M 21 12 L 28.28125 12 L 30 17.125 L 30 23 L 28.84375 23 C 28.398438 21.28125 26.851563 20 25 20 C 23.148438 20 21.601563 21.28125 21.15625 23 L 21 23 Z M 2 14 L 2 16 L 8 16 L 8 14 Z M 9 22 C 10.117188 22 11 22.882813 11 24 C 11 25.117188 10.117188 26 9 26 C 7.882813 26 7 25.117188 7 24 C 7 22.882813 7.882813 22 9 22 Z M 25 22 C 26.117188 22 27 22.882813 27 24 C 27 25.117188 26.117188 26 25 26 C 23.882813 26 23 25.117188 23 24 C 23 22.882813 23.882813 22 25 22 Z"></path>
            </svg>
            <h1 className='text-[12px] md:text-[16px] lg:text-[20px] xl:text-[22px] font-semibold '>Free Shipping</h1>
            <p className='text-[10px] lg:text-[16px] font-normal text-black/90'>For all Orders Over $100</p>
          </div>
          <div className="group-hover flex flex-col items-center justify-center cursor-pointer text-center h-[120px] px-2  ">
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 256 256" class="md:text-[25px] xl:text-[40px] lg:text-[35px] text-[20px] transition-all duration-300 hover:text-primary group-hover:-translate-y-1" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
              <path d="M182,104v32a6,6,0,0,1-6,6H94.48l13.76,13.76a6,6,0,1,1-8.48,8.48l-24-24a6,6,0,0,1,0-8.48l24-24a6,6,0,0,1,8.48,8.48L94.48,130H170V104a6,6,0,0,1,12,0Zm48-48V200a14,14,0,0,1-14,14H40a14,14,0,0,1-14-14V56A14,14,0,0,1,40,42H216A14,14,0,0,1,230,56Zm-12,0a2,2,0,0,0-2-2H40a2,2,0,0,0-2,2V200a2,2,0,0,0,2,2H216a2,2,0,0,0,2-2Z"></path>
            </svg>

            <h1 className='text-[12px] md:text-[16px] lg:text-[20px] xl:text-[22px] font-semibold'>30 Days Returns</h1>
            <p className='text-[10px] lg:text-[16px] font-normal text-black/90'>For an Exchange Product</p>
          </div>

          <div className="group-hover flex flex-col items-center justify-center cursor-pointer text-center h-[120px] px-2 ">
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" class="md:text-[25px] xl:text-[40px] lg:text-[35px] text-[20px] transition-all duration-300 hover:text-primary group-hover:-translate-y-1" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.136.326A1.5 1.5 0 0 1 14 1.78V3h.5A1.5 1.5 0 0 1 16 4.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 13.5v-9a1.5 1.5 0 0 1 1.432-1.499zM5.562 3H13V1.78a.5.5 0 0 0-.621-.484zM1.5 4a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5z"></path>
            </svg>
            <h1 className='text-[12px] md:text-[16px] lg:text-[20px] xl:text-[22px] font-semibold'>Secured Payment</h1>
            <p className='text-[10px] lg:text-[16px] font-normal text-black/90'>Payment Cards Accepted</p>
          </div>

          <div className="group-hover flex flex-col items-center justify-center cursor-pointer text-center h-[120px] px-2">
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 32 32" class="md:text-[25px] xl:text-[40px] lg:text-[35px] text-[20px] transition-all duration-300 hover:text-primary group-hover:-translate-y-1" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
              <path d="M 12 5 C 10.355469 5 9 6.355469 9 8 C 9 8.351563 9.074219 8.683594 9.1875 9 L 4 9 L 4 15 L 5 15 L 5 28 L 27 28 L 27 15 L 28 15 L 28 9 L 22.8125 9 C 22.925781 8.683594 23 8.351563 23 8 C 23 6.355469 21.644531 5 20 5 C 18.25 5 17.0625 6.328125 16.28125 7.4375 C 16.175781 7.585938 16.09375 7.730469 16 7.875 C 15.90625 7.730469 15.824219 7.585938 15.71875 7.4375 C 14.9375 6.328125 13.75 5 12 5 Z M 12 7 C 12.625 7 13.4375 7.671875 14.0625 8.5625 C 14.214844 8.78125 14.191406 8.792969 14.3125 9 L 12 9 C 11.433594 9 11 8.566406 11 8 C 11 7.433594 11.433594 7 12 7 Z M 20 7 C 20.566406 7 21 7.433594 21 8 C 21 8.566406 20.566406 9 20 9 L 17.6875 9 C 17.808594 8.792969 17.785156 8.78125 17.9375 8.5625 C 18.5625 7.671875 19.375 7 20 7 Z M 6 11 L 26 11 L 26 13 L 17 13 L 17 12 L 15 12 L 15 13 L 6 13 Z M 7 15 L 25 15 L 25 26 L 17 26 L 17 16 L 15 16 L 15 26 L 7 26 Z"></path>
            </svg>
            <h1 className="text-[12px] md:text-[16px] lg:text-[20px] xl:text-[22px] font-semibold">Special Gifts</h1>
            <p className='text-[10px] lg:text-[16px] font-normal text-black/90'>Our First Product Order</p>
          </div>

          <div className="group-hover flex flex-col items-center justify-center cursor-pointer text-center h-[120px] px-2">
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="md:text-[25px] xl:text-[40px] lg:text-[35px] text-[20px] transition-all duration-300 hover:text-primary group-hover:-translate-y-1" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C6.486 2 2 6.486 2 12v4.143C2 17.167 2.897 18 4 18h1a1 1 0 0 0 1-1v-5.143a1 1 0 0 0-1-1h-.908C4.648 6.987 7.978 4 12 4s7.352 2.987 7.908 6.857H19a1 1 0 0 0-1 1V18c0 1.103-.897 2-2 2h-2v-1h-4v3h6c2.206 0 4-1.794 4-4 1.103 0 2-.833 2-1.857V12c0-5.514-4.486-10-10-10z"></path>
            </svg>
            <h1 className="text-[12px] md:text-[16px] lg:text-[20px] xl:text-[22px] font-semibold">Support 24/7</h1>
            <p className='text-[10px] lg:text-[16px] font-normal text-black/90'>Contact us Anytime</p>
          </div>
        </div>
      </div>

      <div className=' mx-auto px-4 border-t py-4 mt-10 border-gray-300'>
        <div className=" flex items-start flex-row flex-wrap justify-between relative mx-auto md:container">
          <div className="md:w-[20%] w-[25%]">
            <div className="list-none flex flex-col items-baseline ">
              <h1 className='text-[14px] md:text-[18px] lg:text-[20px] xl:text-[24px] font-semibold '>Contact us</h1>
              <li className='text-[10px] lg:text-[16px] font-normal text-black/90 hover:text-primary transition duration-300 cursor-pointer mt-2.5'>Classyshop - Mega Super Store</li>
              <li className='text-[10px] lg:text-[16px] font-normal text-black/90 hover:text-primary transition duration-300 cursor-pointer mt-1.5'>507-Union Trade Centre France</li>

              <li className='text-[10px] lg:text-[16px] font-normal text-black/90 hover:text-primary transition duration-300 cursor-pointer mt-1.5'>sales@yourcompany.com</li>
              <li className='text-[16px] lg:text-[20px] font-normal text-primary transition duration-300 cursor-pointer mt-1.5'>(+91) 9876-543-210</li>
              <div className="flex items-center justify-center mt-1.5 gap-3">
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="text-[40px] text-primary" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path fill="none" stroke-linejoin="round" stroke-width="32" d="M408 64H104a56.16 56.16 0 0 0-56 56v192a56.16 56.16 0 0 0 56 56h40v80l93.72-78.14a8 8 0 0 1 5.13-1.86H408a56.16 56.16 0 0 0 56-56V120a56.16 56.16 0 0 0-56-56z"></path>
                </svg>
                <div className="text-[10px] md:text-[16px] lg:text-[18px] xl:text-[20px] font-semibold mt-1.5">
                  <li>Online Chat</li>
                  <li>Get Expert Help</li>
                </div>
              </div>
            </div>
          </div>

          <div className="md:w-[33%]">
            <div className="flex items-start justify-between gap-5 md:gap-16 lg:gap-20 xl:gap-30">
              {
                FooterMenu.map((item) => (
                  <div className="" key={item.id} >
                    <h1 className=' text-[14px] md:text-[18px] lg:text-[20px] xl:text-[24px] font-semibold'>{item.title}</h1>
                    <div className="">
                      {
                        item.subMenu.map(({ id, subTitle, path }) => (
                          <Link to={`${path}`} className="mt-1" key={id}>
                            <h1 className=' mt-1.5 text-[12px] lg:text-[16px] font-normal text-black/90 hover:text-primary transition duration-300 cursor-pointer'>{subTitle}</h1>
                          </Link>
                        ))
                      }
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
          <div className="md:w-[30%] flex flex-col items-start justify-start  mt-10 md:mt-0">
            <h1 className='text-[14px] md:text-[18px] lg:text-[20px] xl:text-[24px] font-semibold'>Subscribe to newsletter</h1>
            <p className=' text-[12px] lg:text-[16px] font-normal text-black/90 hover:text-primary transition duration-300 cursor-pointer mt-2'>Subscribe to our latest newsletter to get news about special discounts.</p>
            <div className="">
              <input type="email" name="" id="" placeholder='Your Email Address' className='bg-white/25 border-1 border-black/30 px-2 py-1 w-full rounded-md mt-2' />
              <button className='mt-3 bg-primary text-white px-6 py-2 rounded-md'>Subscribe</button>
            </div>
            <div className="flex items-center justify-center mt-2 gap-2">
              <input type="checkbox" name="" id="" />
              <p className='text-[12px] lg:text-[16px] font-normal text-black/90 hover:text-primary transition duration-300 cursor-pointer'>I agree to the terms and privacy policy </p>
            </div>
          </div>
        </div>

        <div className=" flex items-center justify-center mx-auto h-[1px] w-[98%] bg-black/25 mt-10 " />

        <div className="flex items-center justify-between container ">
          <div className="flex items-center py-3 gap-2">
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 320 512" class="text-[17px] group-hover:text-white" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
              <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
            </svg>
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" class="text-[21px] group-hover:text-white" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
              <path d="M960 509.2c0-2.2 0-4.7-.1-7.6-.1-8.1-.3-17.2-.5-26.9-.8-27.9-2.2-55.7-4.4-81.9-3-36.1-7.4-66.2-13.4-88.8a139.52 139.52 0 0 0-98.3-98.5c-28.3-7.6-83.7-12.3-161.7-15.2-37.1-1.4-76.8-2.3-116.5-2.8-13.9-.2-26.8-.3-38.4-.4h-29.4c-11.6.1-24.5.2-38.4.4-39.7.5-79.4 1.4-116.5 2.8-78 3-133.5 7.7-161.7 15.2A139.35 139.35 0 0 0 82.4 304C76.3 326.6 72 356.7 69 392.8c-2.2 26.2-3.6 54-4.4 81.9-.3 9.7-.4 18.8-.5 26.9 0 2.9-.1 5.4-.1 7.6v5.6c0 2.2 0 4.7.1 7.6.1 8.1.3 17.2.5 26.9.8 27.9 2.2 55.7 4.4 81.9 3 36.1 7.4 66.2 13.4 88.8 12.8 47.9 50.4 85.7 98.3 98.5 28.2 7.6 83.7 12.3 161.7 15.2 37.1 1.4 76.8 2.3 116.5 2.8 13.9.2 26.8.3 38.4.4h29.4c11.6-.1 24.5-.2 38.4-.4 39.7-.5 79.4-1.4 116.5-2.8 78-3 133.5-7.7 161.7-15.2 47.9-12.8 85.5-50.5 98.3-98.5 6.1-22.6 10.4-52.7 13.4-88.8 2.2-26.2 3.6-54 4.4-81.9.3-9.7.4-18.8.5-26.9 0-2.9.1-5.4.1-7.6v-5.6zm-72 5.2c0 2.1 0 4.4-.1 7.1-.1 7.8-.3 16.4-.5 25.7-.7 26.6-2.1 53.2-4.2 77.9-2.7 32.2-6.5 58.6-11.2 76.3-6.2 23.1-24.4 41.4-47.4 47.5-21 5.6-73.9 10.1-145.8 12.8-36.4 1.4-75.6 2.3-114.7 2.8-13.7.2-26.4.3-37.8.3h-28.6l-37.8-.3c-39.1-.5-78.2-1.4-114.7-2.8-71.9-2.8-124.9-7.2-145.8-12.8-23-6.2-41.2-24.4-47.4-47.5-4.7-17.7-8.5-44.1-11.2-76.3-2.1-24.7-3.4-51.3-4.2-77.9-.3-9.3-.4-18-.5-25.7 0-2.7-.1-5.1-.1-7.1v-4.8c0-2.1 0-4.4.1-7.1.1-7.8.3-16.4.5-25.7.7-26.6 2.1-53.2 4.2-77.9 2.7-32.2 6.5-58.6 11.2-76.3 6.2-23.1 24.4-41.4 47.4-47.5 21-5.6 73.9-10.1 145.8-12.8 36.4-1.4 75.6-2.3 114.7-2.8 13.7-.2 26.4-.3 37.8-.3h28.6l37.8.3c39.1.5 78.2 1.4 114.7 2.8 71.9 2.8 124.9 7.2 145.8 12.8 23 6.2 41.2 24.4 47.4 47.5 4.7 17.7 8.5 44.1 11.2 76.3 2.1 24.7 3.4 51.3 4.2 77.9.3 9.3.4 18 .5 25.7 0 2.7.1 5.1.1 7.1v4.8zM423 646l232-135-232-133z"></path>

            </svg>
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 384 512" class="text-[17px] group-hover:text-white" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
              <path d="M204 6.5C101.4 6.5 0 74.9 0 185.6 0 256 39.6 296 63.6 296c9.9 0 15.6-27.6 15.6-35.4 0-9.3-23.7-29.1-23.7-67.8 0-80.4 61.2-137.4 140.4-137.4 68.1 0 118.5 38.7 118.5 109.8 0 53.1-21.3 152.7-90.3 152.7-24.9 0-46.2-18-46.2-43.8 0-37.8 26.4-74.4 26.4-113.4 0-66.2-93.9-54.2-93.9 25.8 0 16.8 2.1 35.4 9.6 50.7-13.8 59.4-42 147.9-42 209.1 0 18.9 2.7 37.5 4.5 56.4 3.4 3.8 1.7 3.4 6.9 1.5 50.4-69 48.6-82.5 71.4-172.8 12.3 23.4 44.1 36 69.3 36 106.2 0 153.9-103.5 153.9-196.8C384 71.3 298.2 6.5 204 6.5z"></path>

            </svg>

            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" class="text-[17px] group-hover:text-white" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
              <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>


            </svg>
          </div>
          <div className="">© 2025 - Ecommerce Template</div>
          <div className="flex items-center gap-2 overflow-hidden">
            <img src={carte_bleue} alt="" />
            <img src={visa} alt="" />
            <img src={paypal} alt="" />
            <img src={american_express} alt="" />


          </div>
        </div>
      </div>
    </>
  )
}

export default Footer