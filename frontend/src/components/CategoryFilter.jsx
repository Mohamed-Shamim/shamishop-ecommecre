import React from 'react'

const CategoryFilter = ({ categories, selecteCategories, onCategoryChange }) => {
  return (
    <div>
      <div className="">
        {
          categories.map((category) => (
            <label htmlFor="" key={category} className='flex items-center gap-2'>
              <input type="checkbox" name="" id="" checked={selecteCategories.includes(category)} onChange={() => onCategoryChange(category)} className='h-4 w-4 text-blue-500 border-gray-400 rounded focus:ring-blue-500' />
              <span className='capitalize'>{category}</span>
            </label>
          ))
        }
      </div>
    </div>
  )
}

export default CategoryFilter