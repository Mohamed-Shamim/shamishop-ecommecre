import React, { useState } from 'react'

const SortFilter = ({ onSortChange, }) => {
    const [sortOption, setSortOption] = useState('')

    const handeleSortChange = (e) => {
        const value = e.target.value;
        setSortOption(value)
        onSortChange(value)
    }

    return (
        <div className='flex items-center justify-end gap-3'>
            <h3 className='text-lg font-semibold '> Sort By</h3>
            <select name="" id="" value={sortOption} onChange={handeleSortChange} className='block  border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500'>
                <option value="">Default</option>
                <option value="price_high_low">Price: High to Low</option>
                <option value="price_low_high">Price:  Low to High </option>
                <option value="name_a_z">Name: A to Z</option>
                <option value="price_z_a">Name: Z to A</option>
            </select>
        </div>
    )
}

export default SortFilter