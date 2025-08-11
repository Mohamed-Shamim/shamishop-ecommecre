import { useState } from 'react';

const PriceFilter = ({ onPriceChange }) => {
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(60000);

    const handleFilter = () => {
        onPriceChange([minPrice, maxPrice]);
    };

    return (
        <div className="border-b pb-4 mb-4">
            <h3 className="text-lg font-semibold mb-4">Filter By Price</h3>
            <div className="flex gap-4 items-center">
                <div className="flex-1">
                    <label className="block text-sm text-gray-600 mb-1">From:</label>
                    <input
                        type="number"
                        value={minPrice}
                        onChange={(e) => setMinPrice(Number(e.target.value))}
                        className="w-full p-2 border rounded-md"
                        placeholder="Rs. 0"
                    />
                </div>
                <div className="flex-1">
                    <label className="block text-sm text-gray-600 mb-1">To:</label>
                    <input
                        type="number"
                        value={maxPrice}
                        onChange={(e) => setMaxPrice(Number(e.target.value))}
                        className="w-full p-2 border rounded-md"
                        placeholder="Rs. 60,000"
                    />
                </div>
            </div>
            <button
                onClick={handleFilter}
                className="mt-4 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors"
            >
                Apply Filter
            </button>
        </div>
    );
};
export default PriceFilter