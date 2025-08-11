import React from 'react'

const RatingFilter = ({ selecteRating, onRatingChange }) => {
    const ratings = [5, 4, 3, 2, 1];

    return (
        <div className='border-b pb-4 mb-4'>
            <h3 className='text-lg font-semibold mb-4'>Filter By Rating</h3>
            <div className="space-y-2">
                {
                    ratings.map((stars) => (
                        <label htmlFor="" key={stars} className='flex items-center gap-2'>
                            <input type="checkbox" name="" id="" checked={selecteRating.includes(stars)} onChange={() => onRatingChange(stars)} className='h-4 w-4 text-blue-500 border-gray-300 rounded focus:ring-blue-500' />
                            <div className="flex">
                                {
                                    [...Array(stars)].map((_, i) => (
                                        <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))
                                }
                            </div>

                        </label>
                    ))
                }

            </div>

        </div>
    )
}

export default RatingFilter