import React, { useEffect, useRef, useState } from "react";
import {
  cart,
  cross_icon,
  heart,
  logo,
  menus,
  rocket,
  search,
  swap,
} from "../assets/assets";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Tooltip from "./Tooltip";
import { navigationMenu } from "../constants";
import { useDebounce } from "../hooks/hooks";
import { useCart } from "../context/CartContext";

export const Header = () => {
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

  const navigate = useNavigate();
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState("");
  const [onClick, setClick] = useState(false);
  const debouncedSearch = useDebounce(searchQuery, 500);

  const oneRef = useRef(null);

  // Get current category from URL
  const searchParams = new URLSearchParams(location.search);
  const currentCategory = searchParams.get("category") || "all";

  // Handle search with debounce
  useEffect(() => {
    if (debouncedSearch) {
      searchParams.set("search", debouncedSearch);
      navigate({ search: searchParams.toString() });
    } else {
      searchParams.delete("search");
      navigate({ search: searchParams.toString() });
    }
    navigate(`/products?${searchParams.toString()}`, { replace: true });
  }, [debouncedSearch]);

  const handleCategoryChange = (category) => {
    const newParams = new URLSearchParams();
    newParams.set("category", category);
    navigate(`/products?${newParams.toString()}`);
    setClick(false);
  };

  const handeleClick = () => {
    setClick(!onClick);
  };

  // Out Click
  useEffect(() => {
    let handle = (e) => {
      if (!oneRef.current.contains(e.target)) {
        setClick(false);
      }
    };
    document.addEventListener("mousedown", handle);
    return () => {
      document.removeEventListener("mousedown", handle);
    };
  });

  // cart countes
  const { cartItems } = useCart();

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <>
      {/* TOP HEADER start */}
      <div className="top-strip py-3 border border-t border-black/20">
        <div className="header-container">
          <div className=" flex items-center justify-between">
            <p className="text-[10px] lg:text-[16px] font-normal text-black/90 flex">
              Get up to 50% off new season styles,{" "}
              <span className="hidden md:flex">limited time only</span>
            </p>
            <div className=" flex items-center justify-center list-none gap-4 text-[13px] font-semibold text-black/70">
              <Link
                to={"/help-center"}
                className="text-[10px] lg:text-[16px] font-normal text-black/90"
              >
                Help Center
              </Link>
              <Link
                to={"/order-tracking"}
                className="text-[10px] lg:text-[16px] font-normal text-black/90"
              >
                Order Tracking
              </Link>
            </div>
          </div>
        </div>
      </div>
      <header className="sticky top-0 z-20 bg-white">
        {/* center header  */}
        <div className=" border-b border-black/20 py-6 items-center w-full  ">
          <div className=" container flex items-center justify-between gap-3 ">
            <Link to={"/"} className="h-[40px] w-[25%]  ">
              <img
                src={logo}
                alt=""
                className="xl:h-[70px] lg:h-[60px] h-[50px]  pb-5"
              />
            </Link>

            {/* this is Search bar */}
            <div className="relative md:w-[45%] w-full">
              <div className=" w-full md:h-[50px] h-[40px] bg-[#F5F0F0] rounded-md relative p-2 items-center justify-center ">
                <input
                  className="w-full pl-5 pr-10 lg:text-base text-sm md:mt-1 bg-transparent rounded-md border-none focus:outline-none "
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button
                  type="submit"
                  className=" button absolute cursor-pointer flex items-center right-0 top-0 h-full xl:w-8 lg:w-6 md:w-4 sm:w-2.5 w-2  rounded-md text-white text-sm font-medium focus:outline-none"
                >
                  <img src={search} alt="" className="md:mb-2 mb-4" />
                </button>
              </div>
            </div>

            {/* this is login and register item*/}
            <div className="flex items-center justify-end list-none sm:w-[30%] w-[160px]">
              <Link
                to={"/login"}
                className="cursor-pointer xl:text-[18px] lg:text-[16px] md:text-[12px] hover:text-primary transition duration-300"
              >
                Login{" "}
              </Link>
              <span className="md:flex hidden">/</span>
              <Link
                to={"/register"}
                className="cursor-pointer xl:text-[18px] lg:text-[16px] md:text-[14px] hover:text-primary transition duration-300 hidden md:block"
              >
                {" "}
                Register
              </Link>

              <div className="flex items-center gap-2 md:gap-4">
                <div className="ml-3">|</div>
                <div className="md:block hidden w-full">
                  <Tooltip text="This is a tooltip!">
                    <img
                      src={swap}
                      alt=""
                      className="md:h-[22px] md:w-[22px] w-[18px] h-[18px] cursor-pointer"
                    />
                    <div className="absolute top-[-5px] right-[-10px] text-sm h-[10px] w-[10px] bg-primary border-2 border-white flex items-center justify-center text-white rounded-full p-2 cursor-pointer ">
                      1
                    </div>
                  </Tooltip>
                </div>
                <div className="relative md:block hidden w-full">
                  <Tooltip text="Wishlist">
                    <img
                      src={heart}
                      alt=""
                      className=" md:h-[22px] md:w-[22px] w-[18px] h-[18px] cursor-pointer"
                    />
                    <div className="absolute top-[-5px] right-[-10px] text-sm h-[10px] w-[10px] bg-primary border-2 border-white flex items-center justify-center text-white rounded-full p-2 cursor-pointer ">
                      1
                    </div>
                  </Tooltip>
                </div>
                <div className="w-full">
                  <Link to={"/cart"}>
                    <Tooltip text="Cart">
                      <img
                        src={cart}
                        alt=""
                        className="md:h-[22px] md:w-[22px] w-[18px] h-[18px] cursor-pointer "
                      />
                      <div className="absolute top-[-5px] right-[-13px] text-sm h-[10px] w-[10px] bg-primary border-2 border-white flex items-center justify-center text-white rounded-full p-2 cursor-pointer">
                        {totalItems}
                      </div>
                    </Tooltip>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* main navigation menu */}
        <div className="  py-3 shadow bg-white">
          <div className="header-container flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div
                className="flex items-center gap-1 cursor-pointer "
                onClick={handeleClick}
              >
                <img src={menus} alt="" className="lg:h-[30px] h-[20px] " />
                <span className="text-[11px] lg:text-[16px] font-semibold text-black/90  transition duration-300 cursor-pointer">
                  All Product
                </span>
              </div>

              <div
                className={`absolute top-0  bottom-0 h-screen bg-white shadow-2xl z-50 w-[300px] transition-all duration-300 ${
                  onClick ? " left-0" : " -left-80"
                }`}
              >
                <img
                  src={cross_icon}
                  alt=""
                  className="absolute top-0 right-0 p-4 cursor-pointer h-14"
                  onClick={handeleClick}
                />

                <nav className="flex-row w-full mt-2 bg-white" ref={oneRef}>
                  <img src={logo} alt="" className="xl:h-[60px] h-[44px]  " />
                  <h1 className="mt-5 text-[18px] font-semibold px-2">
                    Shop By Categories
                  </h1>
                  <div className="mt-4 px-3">
                    {categories.map((cat) => (
                      <div
                        key={cat}
                        onClick={() => handleCategoryChange(cat)}
                        className="p-2 w-full cursor-pointer uppercase text-[14px] font-semibold hover:bg-cyan-100 "
                      >
                        {cat}
                      </div>
                    ))}
                  </div>
                </nav>
              </div>

              <div className="h-[15px] mt-1 w-[2px] bg-black/85" />
              <ul className="items-center justify-center ">
                <li className="flex gap-4">
                  {navigationMenu.map((item) => (
                    <Link
                      key={item.id}
                      to={item.link}
                      className={` text-[12px] lg:text-[16px] font-semibold text-black/90 hover:text-primary transition duration-300 cursor-pointer gap-3 ${item.className}`}
                    >
                      {item.title}{" "}
                    </Link>
                  ))}
                </li>
              </ul>
            </div>
            <span className="xl:flex items-center  gap-3 hidden">
              <img src={rocket} alt="" className="h-[20px]" />
              <p>Free International Delivery</p>
            </span>
          </div>
        </div>
      </header>
    </>
  );
};
