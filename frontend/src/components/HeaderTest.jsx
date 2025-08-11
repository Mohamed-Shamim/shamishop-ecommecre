import { useState, useEffect } from 'react';
import {  useNavigate, useLocation } from 'react-router-dom';
import { useDebounce } from '../hooks/hooks';

const HeaderTest = () => {
    const categories = ['all', 'man', 'woman', 'kids', 'fashion'];
    const navigate = useNavigate();
    const location = useLocation();
    const [searchQuery, setSearchQuery] = useState('');
    const debouncedSearch = useDebounce(searchQuery, 500);

    // Get current category from URL
    const searchParams = new URLSearchParams(location.search);
    const currentCategory = searchParams.get('category') || 'all';

    // Handle search with debounce
    useEffect(() => {
        if (debouncedSearch) {
            searchParams.set('search', debouncedSearch);
            navigate({ search: searchParams.toString() });
        } else {
            searchParams.delete('search');
            navigate({ search: searchParams.toString() });
        }
        navigate(`/products?${searchParams.toString()}`, { replace: true })
    }, [debouncedSearch]);

    const handleCategoryChange = (category) => {
        const newParams = new URLSearchParams()
        newParams.set("category", category)
        navigate(`/products?${newParams.toString()}`)
    };

    return (
        <header className="bg-white shadow-md sticky top-0 z-10">
            <div className="container mx-auto px-4 py-3 flex flex-col md:flex-row gap-4 items-center">
                {/* Categories Menu */}
                <nav className="flex gap-4 overflow-x-auto">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => handleCategoryChange(cat)}
                            className={`px-3 py-2 rounded-md capitalize whitespace-nowrap transition-colors
                ${currentCategory === cat
                                    ? 'bg-blue-500 text-white'
                                    : 'bg-gray-100 hover:bg-blue-100 text-gray-700'}`}
                        >
                            {cat}
                        </button>
                    ))}
                </nav>

                {/* Search Bar */}
                <div className="flex gap-2 w-full md:w-96">
                    <input
                        type="text"
                        placeholder="Search products..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none 
              focus:ring-2 focus:ring-blue-500 transition-shadow"
                    />
                </div>
            </div>
        </header>
    );
};

export default HeaderTest;