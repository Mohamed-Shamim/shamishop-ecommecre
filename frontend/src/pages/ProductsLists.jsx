import { useState, useEffect, useContext, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import LoadingSpinner from "../components/Loading";
import { ProductContext } from "../context/ProductContext";
import PriceFilter from "../components/PriceFilter";
import RatingFilter from "../components/RatingFilter";
import CategoryFilter from "../components/CategoryFilter";
import { left_arrow } from "../assets/assets";
import SortFilter from "../components/SortFilter";
import ProductItems from "../components/ProductItems";

const ProductLists = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const categories = [
    "all",
    "man",
    "woman",
    "kids",
    "fashion",
    "wellness",
    "electronics",
    "latest",
    "sport",
    "new",
    "sale",
    "dranda",
    "footwear",
    "Beauty",
    "groceries",
    "jewellery",
  ];
  const categoriess = categories.slice(1, 16);
  const [isLoading, setIsLoading] = useState(true);
  const [showFilter, setShowFilter] = useState(true);
  const [priceRange, setPriceRange] = useState([0, 60000]);
  const [selecteRating, setSelecteRating] = useState([]);
  const [selecteCategories, setSelecteCategories] = useState([]);
  const [sortOption, setSortOption] = useState("");

  // Sample products
  const { productData } = useContext(ProductContext);

  // State management
  const [displayCount, setDisplayCount] = useState(12);
  const [filteredProducts, setFilteredProducts] = useState([]);

  // Get current filters from URL
  const searchParams = new URLSearchParams(location.search);
  const currentCategory = searchParams.get("category") || "all";
  const searchQuery = searchParams.get("search") || "";

  useEffect(() => {
    setIsLoading(true);

    const timer = setTimeout(() => {
      const filtered = productData.filter((product) => {
        const matchesCategory =
          currentCategory === "all" || product.category === currentCategory;
        const matchesSearch = product.name
          .toLowerCase()
          .includes(searchQuery.toLowerCase());
        const matchesPrice =
          product.price >= priceRange[0] && product.price <= priceRange[1];
        const matchesRating =
          selecteRating.length === 0 ||
          selecteRating.some((r) => Math.floor(product.rating) === r);
        const matchesCategories =
          selecteCategories.length === 0 ||
          selecteCategories.includes(product.category);
        return (
          matchesCategory &&
          matchesSearch &&
          matchesPrice &&
          matchesRating &&
          matchesCategories
        );
      });

      setFilteredProducts(filtered);
      setDisplayCount(12);
      setIsLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [
    location.search,
    priceRange,
    productData,
    selecteRating,
    selecteCategories,
  ]);

  // Handle category change from ProductList's own buttons
  const handleCategoryChange = (category) => {
    const newParams = new URLSearchParams();
    newParams.set("category", category);
    if (searchQuery) newParams.set("search", searchQuery);
    navigate(`/products?${newParams.toString()}`);
  };

  const loadMore = () => {
    setDisplayCount((prev) => Math.min(prev + 15, filteredProducts.length));
  };

  //Category Slider --------------------------------------------------------------
  const sliderRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // drag slider
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleMouseLeave = () => setIsDragging(false);
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2; // scroll speed
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  useEffect(() => {
    const slider = sliderRef.current;

    const handleScroll = () => checkButtons();
    slider.addEventListener("scroll", handleScroll);

    // Delay initial check to allow layout
    const timer = setTimeout(() => {}, 100);

    return () => {
      clearTimeout(timer);
      slider.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // handel rating filter logic--------------------------------------------
  const handelRatingChange = (rating) => {
    setSelecteRating((prev) =>
      prev.includes(rating)
        ? prev.filter((r) => r !== rating)
        : [...prev, rating]
    );
  };

  // handel category filter logic ----------
  const handelCategoryChange = (categorys) => {
    setSelecteCategories((prev) =>
      prev.includes(categorys)
        ? prev.filter((c) => c !== categorys)
        : [...prev, categorys]
    );
  };

  // handel sort filter ----------------------------

  const handeleSortChange = (option) => {
    setSortOption(option);
  };

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortOption) {
      case "price_high_low":
        return b.price - a.price;

      case "price_low_high":
        return a.price - b.price;

      case "name_a_z":
        return a.name.localeCompare(b.name);
      case "name_z_a":
        return b.name.localeCompare(a.name);
      default:
        return 0;
    }
  });
  const visibleProducts =
    filteredProducts && sortedProducts.slice(0, displayCount);

  return (
    <div className="container mx-auto p-4 min-h-screen">
      <div className="relative flex items-center justify-between mt-4 ">
        <div
          className="flex gap-2 mb-4 overflow-x-auto pb-2 no-scrollbar scroll-smooth"
          ref={sliderRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategoryChange(cat)}
              className={`px-4 py-2 rounded-full capitalize no-select ${
                currentCategory === cat
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <>
        <div className="flex justify-between">
          <p
            className={`text-lg font-semibold flex gap-5 transition duration-300 items-center `}
            onClick={() => setShowFilter(!showFilter)}
          >
            FILTERS{" "}
            <img
              src={left_arrow}
              alt=""
              className={`h-3 transition-all duration-300 ${
                showFilter ? " rotate-180" : "rotate-90"
              } `}
            />{" "}
          </p>
          <SortFilter onSortChange={handeleSortChange} />
        </div>
        <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-2 ">
          {/* Filter Options */}
          <div className="md:min-w-56 lg:w-80 w-full xl:w-96 sm:w-60  ">
            {/* <div className="flex items-center justify-between">
                            <p className={`text-lg font-semibold flex items-center gap-5 transition duration-300 `} onClick={() => setShowFilter(!showFilter)}>FILTERS <img src={left_arrow} alt="" className={`h-3 transition-all duration-300 ${showFilter ? " rotate-180" : "rotate-90"} `} /> </p>
                            <div className="sm:hidden block">
                                <SortFilter onSortChange={handeleSortChange} />
                            </div>

                        </div> */}
            {/* Category Filter */}
            <div
              className={`border border-gray-300 pl-5 py-3 mt-6 max-h-52 overflow-y-auto no-scrollbar ${
                showFilter ? "" : "hidden"
              } sm:block`}
            >
              <p className="mb-3 text-sm font-medium ">CATAGORIES</p>
              <div className="flex flex-col gap-2 text-sm font-light  text-gray-700">
                <CategoryFilter
                  categories={categoriess}
                  selecteCategories={selecteCategories}
                  onCategoryChange={handelCategoryChange}
                />
              </div>
            </div>

            <div className="mt-4">
              <PriceFilter onPriceChange={setPriceRange} />
            </div>
            <div className={`mt-4  ${showFilter ? "" : "hidden"} `}>
              <RatingFilter
                selecteRating={selecteRating}
                onRatingChange={handelRatingChange}
              />
            </div>
          </div>
          {isLoading ? (
            <LoadingSpinner />
          ) : (
            <div className="flex-col overflow-y-scroll no-scrollbar items-center justify-center ">
              <h1 className="text-lg font-semibold items-center flex ">
                ALL COLLECTIONS
              </h1>
              {/* No Products Found Message */}
              {filteredProducts.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-gray-500 text-lg ">
                    😞 No products found matching your criteria
                  </p>
                  <p className="text-gray-400 mt-2">
                    Try adjusting your search or filters
                  </p>
                </div>
              ) : (
                <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {visibleProducts.map((item, index) => (
                    <div key={index} className="p-4 ">
                      <ProductItems
                        id={item._id}
                        image={item.image}
                        name={item.name}
                        price={item.price}
                        offerPrice={item.offerPrice}
                        rating={item.rating}
                        offPrice={item.offPrice}
                        productData={item.productData}
                        brands={item.brands}
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
        {displayCount < filteredProducts.length && (
          <div className="mt-6 flex justify-center animate-slide-up">
            <button
              onClick={loadMore}
              className="px-6 py-2 bg-blue-500 text-white rounded-lg 
                              hover:bg-blue-600 transition-colors"
            >
              Load More ({filteredProducts.length - displayCount} remaining)
            </button>
          </div>
        )}
      </>
    </div>
  );
};

export default ProductLists;
