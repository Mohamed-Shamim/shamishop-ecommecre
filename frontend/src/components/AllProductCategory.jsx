import React from 'react'
import { ProductCategories } from '../constants'
import { Link, Links } from 'react-router-dom'

const AllProduct = () => {
  return (
    <Link>
      <div className=" flex-col">
        {ProductCategories.map(cat => (
          <Link to={"/products-list"}
            key={cat}
            className='flex flex-col px-3 cursor-pointer py-1 '
          >
            {cat}
          </Link>
        ))}
      </div>
    </Link>
  )
}

export default AllProduct