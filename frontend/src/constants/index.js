import {
    bags,
    beauty,
    electronics,
    fashion,
    groceries,
    jewellery,
    Wellness,
    footwear,
    product_2,
    productHo_2,
    product_9,
    productHo_9,

    // productHo_1,

    product_8,
    productHo_8,
    productHo2_8,
    productHo3_8,
    product_10,
    productHo_10,

} from '../assets/assets'


export const navigationMenu = [
    {
        id: 1,
        title: "Featured",
        link: "/",

        subMenu: [
            {

            }]
    },

    {
        id: 3,
        title: "AI Sourcing",
        link: "/",
    },
    {
        id: 4,
        title: "Buyer Central",
        link: "/",
        className: "hidden sm:flex"
    },

    {
        id: 6,
        title: "Contact Us",
        link: "/",

    },
    {
        id: 7,
        title: "Get the app",
        link: "/",
        className: "hidden sm:flex"


    },
    {
        id: 8,
        title: "Become a supplier",
        link: "/",
        className: "hidden md:flex"
    }

]


export const homeFashion = [
    {
        id: 1,
        img: fashion,
        alt: "Fashion 1",
        title: "Fashion",
        link: "/",

    },
    {
        id: 2,
        img: electronics,
        alt: "Electronics 1",
        title: "Electronics",
        link: "/",
    },
    {
        id: 3,
        img: bags,
        alt: "Bags 1",
        title: "Bags",
        link: "/",
    },
    {
        id: 4,
        img: footwear,
        alt: "Footwear 1",
        title: "Footwear",
        link: "/",
    },
    {
        id: 5,
        img: beauty,
        alt: "Beauty 1",
        title: "Beauty",
        link: "/",
    },
    {
        id: 6,
        img: groceries,
        alt: "Groceries 1",
        title: "Groceries",
        link: "/",
    },
    {
        id: 7,
        img: jewellery,
        alt: "Jewellery 1",
        title: "Jewellery",
        link: "/",
    },
    {
        id: 8,
        img: Wellness,
        title: "Wellness",
        link: "/",
    }

]

export const ProductCategories = ['all', 'man', 'woman', 'kids', 'fashion', "wellness", "electronics", 'latest', 'sport', 'new', 'sale', 'dranda', "footwear", "Beauty", "groceries", "jewellery"]



// Footer menu ------------------------

export const FooterMenu = [

    {
        id: 2,
        title: "Products",
        subMenu: [
            {
                id: 1,
                subTitle: "Prices drop",
                path: "/prices-drop"

            }, {
                id: 2,
                subTitle: "New products",
                path: "/new-products"

            }, {
                id: 3,
                subTitle: "Best sales",
                path: "/best-sales"

            }, {
                id: 4,
                subTitle: "Contact us",
                path: "/contact"

            }, {
                id: 5,
                subTitle: "Sitemap",
                path: "/sitemap"

            }, {
                id: 6,
                subTitle: "Stores",
                path: "/stores"

            }
        ]
    }, {
        id: 3,
        title: "Our company",
        subMenu: [
            {
                id: 1,
                subTitle: "Delivery",
                path: "/delivery"

            }, {
                id: 2,
                subTitle: "Legal Notice",
                path: "/legal-notice"

            }, {
                id: 3,
                subTitle: "Terms and conditions of use",
                path: "/terms"

            }, {
                id: 4,
                subTitle: "About us",
                path: "/about"

            }, {
                id: 5,
                subTitle: "Secure payment",
                path: "/Secure payment"

            }, {
                id: 6,
                subTitle: "Login",
                path: "/login"

            }
        ]
    },

]


// product ----------------------------

export const productData = [
    {
        _id: "aaaab",
        name: "Men Round",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 90,
        offerPrice: 100,
        offPrice: 30,
        image: [product_2, productHo_2,],
        category: "man",
        subCategory: "Topwear",
        sizes: ["M", "L", "XL"],
        date: 1716621345448,
        bestseller: true,
        rating: 5,
        reviews: 10,
        inStock: "82727 items",
        brands: "VNEEDs",
        Latest: true

    },
    {
        _id: "aaaac",
        name: "Men Pullover Cotton T-shirt",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 80,
        offerPrice: 100,
        offPrice: 20,
        image: [product_2, productHo_2,],
        category: "man",
        subCategory: "Topwear",
        sizes: ["M", "L", "XL"],
        date: 1716621345448,
        bestseller: true,
        rating: 3.5,
        latestProduct: true,
        reviews: 10,
        inStock: true,
        brands: "VNEEDs"
    },
    {
        _id: "aaaad",
        name: "Men Round Neck Cotton T-shirt",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 90,
        offerPrice: 100,
        offPrice: 10,
        image: [product_2, productHo_2,],
        category: "man",
        subCategory: "Topwear",
        sizes: ["M", "L", "XL"],
        date: 1716621345448,
        bestseller: true,
        latestProduct: true,
        rating: 2.5,
        reviews: 10,
        inStock: true,
        brands: "VNEEDs"

    },
    {
        _id: "aaaae",
        name: "Men Pullover Cotton T-shirt",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 80,
        offerPrice: 100,
        offPrice: 20,
        image: [product_2, productHo_2,],
        category: "woman",
        subCategory: "Topwear",
        sizes: ["M", "L", "XL"],
        date: 1716621345448,
        bestseller: true,
        latestProduct: true,
        rating: 4,
        reviews: 10,
        inStock: true,
        brands: "VNEEDs"
    },
    {

        _id: "aaaaf",
        name: "Men Round Neck Cotton T-shirt",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 90,
        offerPrice: 100,
        offPrice: 50,
        image: [product_2, productHo_2,],
        category: "men",
        subCategory: "Topwear",
        sizes: ["M", "L", "XL"],
        date: 1716621345448,
        bestseller: true,
        latestProduct: true,
        rating: 4.5,
        reviews: 10,
        inStock: true,
        brands: "VNEEDs"
    },
    {
        _id: "aaag",
        name: "Men Pullover Cotton T-shirt",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 80,
        offerPrice: 100,
        offPrice: 20,
        image: [product_2, productHo_2,],
        category: "men",
        subCategory: "Topwear",
        sizes: ["M", "L", "XL"],
        date: 1716621345448,
        bestseller: true,
        latestProduct: true,
        rating: 3.5,
        reviews: 10,
        inStock: true,
        brands: "VNEEDS"
    }, {
        _id: "aaah",
        name: "Men Pullover Cotton T-shirt",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 80,
        offerPrice: 100,
        offPrice: 20,
        image: [product_2, productHo_2,],
        category: "men",
        subCategory: "Topwear",
        sizes: ["M", "L", "XL"],
        date: 1716621345448,
        bestseller: true,
        latestProduct: true,
        rating: 4.5,
        reviews: 10,
        inStock: true,
        brands: "VNEEDS"
    }, {
        _id: "aaai",
        name: "Men Pullover Cotton T-shirt",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 80,
        offerPrice: 100,
        offPrice: 20,
        image: [product_2, productHo_2,],
        category: "men",
        subCategory: "Topwear",
        sizes: ["M", "L", "XL"],
        date: 1716621345448,
        bestseller: true,
        latestProduct: true,
        rating: 4.5,
        reviews: 10,
        inStock: true,
        brands: "VNEEDS"
    }, {
        _id: "aaaj",
        name: "Men Pullover Cotton T-shirt",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 80,
        offerPrice: 100,
        offPrice: 20,
        image: [product_2, productHo_2,],
        category: "woman",
        subCategory: "Topwear",
        sizes: ["M", "L", "XL"],
        date: 1716621345448,
        bestseller: true,
        latestProduct: true,
        rating: 4.5,
        reviews: 10,
        inStock: true,
        brands: "VNEEDS"
    }, {
        _id: "aaak",
        name: "Men Pullover Cotton T-shirt",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 80,
        offerPrice: 100,
        offPrice: 20,
        image: [product_2, product_2, productHo_2,],
        category: "woman",
        subCategory: "Topwear",
        sizes: ["M", "L", "XL"],
        date: 1716621345448,
        bestseller: true,
        latestProduct: true,
        rating: 4.5,
        reviews: 10,
        inStock: true,
        brands: "VNEEDS",
        Latest: true,
    }, {
        _id: "aaan",
        name: "Men Pullover Cotton T-shirt",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 80,
        offerPrice: 100,
        offPrice: 20,
        image: [product_2, product_2, productHo_2,],
        category: "woman",
        subCategory: "Topwear",
        sizes: ["M", "L", "XL"],
        date: 1716621345448,
        bestseller: true,
        rating: 4.5,
        reviews: 10,
        inStock: true,
        brands: "VNEEDS",
        Latest: true,
    }, {
        _id: "aaam",
        name: "Men Pullover Cotton T-shirt",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 80,
        offerPrice: 100,
        offPrice: 20,
        image: [product_2, product_2, productHo_2,],
        category: "Men",
        subCategory: "Topwear",
        sizes: ["M", "L", "XL"],
        date: 1716621345448,
        bestseller: true,
        latestProduct: true,
        rating: 4.5,
        reviews: 10,
        inStock: true,
        brands: "VNEEDS",
        Latest: true,
    }, {
        _id: "aaao",
        name: "Men Pullover Cotton T-shirt",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 80,
        offerPrice: 100,
        offPrice: 20,
        image: [product_2, product_2, productHo_2,],
        category: "Men",
        subCategory: "Topwear",
        sizes: ["M", "L", "XL"],
        date: 1716621345448,
        bestseller: true,
        latestProduct: true,
        rating: 4.5,
        reviews: 10,
        inStock: true,
        brands: "VNEEDS"
    }, {
        _id: "aaap",
        name: "Men Pullover Cotton T-shirt",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 80,
        offerPrice: 100,
        offPrice: 20,
        image: [product_2, product_2, productHo_2,],
        category: "Men",
        subCategory: "Topwear",
        sizes: ["M", "L", "XL"],
        date: 1716621345448,
        bestseller: true,
        latestProduct: true,
        rating: 4.5,
        reviews: 10,
        inStock: true,
        brands: "VNEEDS",
        Latest: true,
    }, {
        _id: "aaas",
        name: "Men Pullover Cotton T-shirt",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 80,
        offerPrice: 100,
        offPrice: 20,
        image: [product_2, product_2, productHo_2,],
        category: "Men",
        subCategory: "Topwear",
        sizes: ["M", "L", "XL"],
        date: 1716621345448,
        bestseller: true,
        rating: 4.5,
        reviews: 10,
        inStock: true,
        brands: "VNEEDS",
        Latest: true,
    }, {
        _id: "aaat",
        name: "Men Pullover Cotton T-shirt",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 80,
        offerPrice: 100,
        offPrice: 20,
        image: [product_2, product_2, productHo_2,],
        category: "Men",
        subCategory: "Topwear",
        sizes: ["M", "L", "XL"],
        date: 1716621345448,
        bestseller: true,
        latestProduct: true,
        rating: 4,
        reviews: 10,
        inStock: true,
        brands: "VNEEDS",
        Latest: true,
    }, {
        _id: "aaau",
        name: "Men Pullover Cotton T-shirt",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 80,
        offerPrice: 100,
        offPrice: 20,
        image: [product_2, product_2, productHo_2,],
        category: "Men",
        subCategory: "Topwear",
        sizes: ["M", "L", "XL"],
        date: 1716621345448,
        bestseller: true,
        Featured: true,
        rating: 4.5,
        reviews: 10,
        inStock: true,
        brands: "VNEEDS"
    }, {
        _id: "aaav",
        name: "Men Pullover Cotton T-shirt",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 80,
        offerPrice: 100,
        offPrice: 20,
        image: [product_2, product_2, productHo_2,],
        category: "Men",
        subCategory: "Topwear",
        sizes: ["M", "L", "XL"],
        date: 1716621345448,
        bestseller: true,
        rating: 4.5,
        reviews: 10,
        inStock: true,
        brands: "VNEEDS"
    }, {
        _id: "aaaw",
        name: "Men Pullover Cotton T-shirt",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 80,
        offerPrice: 100,
        offPrice: 20,
        image: [product_2, product_2, productHo_2,],
        category: "Men",
        subCategory: "Topwear",
        sizes: ["M", "L", "XL"],
        date: 1716621345448,
        bestseller: true,
        rating: 4.5,
        reviews: 10,
        inStock: true,
        brands: "VNEEDS"
    }, {
        _id: "aaa1",
        name: "Men Pullover Cotton T-shirt",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 80,
        offerPrice: 100,
        offPrice: 20,
        image: [product_8, productHo_8, productHo2_8, productHo3_8],
        category: "Men",
        subCategory: "Topwear",
        sizes: ["M", "L", "XL"],
        date: 1716621345448,
        bestseller: true,
        Featured: true,
        rating: 4.5,
        reviews: 10,
        inStock: true,
        brands: "VNEEDS"
    }, {
        _id: "aaa2",
        name: "Men Pullover Cotton T-shirt",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 80,
        offerPrice: 100,
        offPrice: 20,
        image: [product_8, productHo_8, productHo2_8, productHo3_8],
        category: "Men",
        subCategory: "Topwear",
        sizes: ["M", "L", "XL"],
        date: 1716621345448,
        bestseller: true,
        Featured: true,
        rating: 4.5,
        reviews: 10,
        inStock: true,
        brands: "VNEEDS"
    }, {
        _id: "aaa3",
        name: "Men Pullover Cotton T-shirt",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 80,
        offerPrice: 100,
        offPrice: 20,
        image: [product_8, productHo_8, productHo2_8, productHo3_8],
        category: "Men",
        subCategory: "Topwear",
        sizes: ["M", "L", "XL"],
        date: 1716621345448,
        bestseller: true,
        Featured: true,
        rating: 4.5,
        reviews: 10,
        inStock: true,
        brands: "VNEEDS"
    }, {
        _id: "aaa4",
        name: "Men Pullover Cotton T-shirt",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 80,
        offerPrice: 100,
        offPrice: 20,
        image: [product_8, productHo_8, productHo2_8, productHo3_8],
        category: "Men",
        subCategory: "Topwear",
        sizes: ["M", "L", "XL"],
        date: 1716621345448,
        bestseller: true,
        Featured: true,
        rating: 4.5,
        reviews: 10,
        inStock: true,
        brands: "VNEEDS"
    }, {
        _id: "aaa5",
        name: "Men Pullover Cotton T-shirt",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 80,
        offerPrice: 100,
        offPrice: 20,
        image: [product_8, productHo_8, productHo2_8, productHo3_8],
        category: "Men",
        subCategory: "Topwear",
        sizes: ["M", "L", "XL"],
        date: 1716621345448,
        bestseller: true,
        Featured: true,
        rating: 4.5,
        reviews: 10,
        inStock: true,
        brands: "VNEEDS"
    }, {
        _id: "aaa6",
        name: "Men Pullover Cotton T-shirt",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 80,
        offerPrice: 100,
        offPrice: 20,
        image: [product_8, productHo_8, productHo2_8, productHo3_8],
        category: "Men",
        subCategory: "Topwear",
        sizes: ["M", "L", "XL"],
        date: 1716621345448,
        bestseller: true,
        Featured: true,
        rating: 4.5,
        reviews: 10,
        inStock: true,
        brands: "VNEEDS"
    }, {
        _id: "aaa7",
        name: "Men Pullover Cotton T-shirt",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 80,
        offerPrice: 100,
        offPrice: 20,
        image: [product_8, productHo_8, productHo2_8, productHo3_8],
        category: "Men",
        subCategory: "Topwear",
        sizes: ["M", "L", "XL"],
        date: 1716621345448,
        bestseller: true,
        Featured: true,
        rating: 4.5,
        reviews: 10,
        inStock: true,
        brands: "VNEEDS"
    }, {
        _id: "aaa8",
        name: "Men Pullover Cotton T-shirt",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 80,
        offerPrice: 100,
        offPrice: 20,
        image: [product_8, productHo_8, productHo2_8, productHo3_8],
        category: "Men",
        subCategory: "Topwear",
        sizes: ["M", "L", "XL"],
        date: 1716621345448,
        bestseller: true,
        Featured: true,
        rating: 4.5,
        reviews: 10,
        inStock: true,
        brands: "VNEEDS"
    }, {
        _id: "aaa9",
        name: "Men Pullover Cotton T-shirt",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 80,
        offerPrice: 100,
        offPrice: 20,
        image: [product_8, productHo_8, productHo2_8, productHo3_8],
        category: "Men",
        subCategory: "Topwear",
        sizes: ["M", "L", "XL"],
        date: 1716621345448,
        bestseller: true,
        Featured: true,
        rating: 4.5,
        reviews: 10,
        inStock: true,
        brands: "VNEEDS"
    }, {
        _id: "aaa10",
        name: "Men Pullover Cotton T-shirt",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 80,
        offerPrice: 100,
        offPrice: 20,
        image: [product_8, productHo_8, productHo2_8, productHo3_8],
        Featured: true,
        category: "Men",
        subCategory: "Topwear",
        sizes: ["M", "L", "XL"],
        date: 1716621345448,
        bestseller: true,
        rating: 4.5,
        reviews: 10,
        inStock: true,
        brands: "VNEEDS"
    }, {
        _id: "aaa11",
        name: "Men Pullover Cotton T-shirt",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 80,
        offerPrice: 100,
        offPrice: 20,
        image: [product_8, productHo_8, productHo2_8, productHo3_8],
        category: "Men",
        subCategory: "Topwear",
        sizes: ["M", "L", "XL"],
        date: 1716621345448,
        bestseller: true,
        Featured: true,
        rating: 4.5,
        reviews: 10,
        inStock: true,
        brands: "VNEEDS"
    },
    {
        _id: "aaa12",
        name: "Men Pullover Cotton T-shirt",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 80,
        offerPrice: 100,
        offPrice: 20,
        image: [product_9, productHo_9, productHo2_8, productHo3_8],
        category: "Men",
        subCategory: "Topwear",
        sizes: ["M", "L", "XL"],
        date: 1716621345448,
        bestseller: true,
        wellness: true,
        rating: 4.5,
        reviews: 10,
        inStock: true,
        brands: "VNEEDS"
    }, {
        _id: "aaa13",
        name: "Men Pullover Cotton T-shirt",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 80,
        offerPrice: 100,
        offPrice: 20,
        image: [product_9, productHo_9, productHo2_8, productHo3_8],
        category: "Men",
        subCategory: "Topwear",
        sizes: ["M", "L", "XL"],
        date: 1716621345448,
        bestseller: true,
        wellness: true,
        rating: 4.5,
        reviews: 10,
        inStock: true,
        brands: "VNEEDS"
    }, {
        _id: "aaa14",
        name: "Men Pullover Cotton T-shirt",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 80,
        offerPrice: 100,
        offPrice: 20,
        image: [product_9, productHo_9, productHo2_8, productHo3_8],
        category: "Men",
        subCategory: "Topwear",
        sizes: ["M", "L", "XL"],
        date: 1716621345448,
        bestseller: true,
        wellness: true,
        rating: 4.5,
        reviews: 10,
        inStock: true,
        brands: "VNEEDS"
    }, {
        _id: "aaa15",
        name: "Men Pullover Cotton T-shirt",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 80,
        offerPrice: 100,
        offPrice: 20,
        image: [product_9, productHo_9, productHo2_8, productHo3_8],
        category: "wellness",
        subCategory: "Topwear",
        sizes: ["M", "L", "XL"],
        date: 1716621345448,
        bestseller: true,
        wellness: true,
        rating: 4.5,
        reviews: 10,
        inStock: true,
        brands: "VNEEDS"
    }, {
        _id: "aaa16",
        name: "Men Pullover Cotton T-shirt",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 80,
        offerPrice: 100,
        offPrice: 20,
        image: [product_9, productHo_9, productHo2_8, productHo3_8],
        category: "Wellness",
        subCategory: "Topwear",
        sizes: ["M", "L", "XL"],
        date: 1716621345448,
        bestseller: true,
        wellness: true,
        rating: 4.5,
        reviews: 10,
        inStock: true,
        brands: "VNEEDS"
    }, {
        _id: "aaa17",
        name: "Men Pullover Cotton T-shirt",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 80,
        offerPrice: 100,
        offPrice: 20,
        image: [product_9, productHo_9, productHo2_8, productHo3_8],
        category: "Wellness",
        subCategory: "Topwear",
        sizes: ["M", "L", "XL"],
        date: 1716621345448,
        bestseller: true,
        wellness: true,
        rating: 4.5,
        reviews: 10,
        inStock: true,
        brands: "VNEEDS"
    }, {
        _id: "aaa18",
        name: "Men Pullover Cotton T-shirt",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 80,
        offerPrice: 100,
        offPrice: 20,
        image: [product_9, productHo_9, productHo2_8, productHo3_8],
        category: "wellness",
        subCategory: "Topwear",
        sizes: ["M", "L", "XL"],
        date: 1716621345448,
        bestseller: true,
        wellness: true,
        rating: 4.5,
        reviews: 10,
        inStock: true,
        brands: "VNEEDS"
    }, {
        _id: "aaa19",
        name: "Men Pullover Cotton T-shirt",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 80,
        offerPrice: 100,
        offPrice: 20,
        image: [product_9, productHo_9, productHo2_8, productHo3_8],
        category: "wellness",
        subCategory: "Topwear",
        sizes: ["M", "L", "XL"],
        date: 1716621345448,
        bestseller: true,
        wellness: true,
        rating: 4.5,
        reviews: 10,
        inStock: true,
        brands: "VNEEDS"
    }, {
        _id: "aaa20",
        name: "Men Pullover Cotton T-shirt",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 80,
        offerPrice: 100,
        offPrice: 20,
        image: [product_9, productHo_9, productHo2_8, productHo3_8],
        category: "wellness",
        subCategory: "Topwear",
        sizes: ["M", "L", "XL"],
        date: 1716621345448,
        bestseller: true,
        wellness: true,
        rating: 4.5,
        reviews: 10,
        inStock: true,
        brands: "VNEEDS"
    }, {
        _id: "aaa21",
        name: "Men Pullover Cotton T-shirt",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 80,
        offerPrice: 100,
        offPrice: 20,
        image: [product_9, productHo_9, productHo2_8, productHo3_8],
        category: "wellness",
        subCategory: "Topwear",
        sizes: ["M", "L", "XL"],
        date: 1716621345448,
        bestseller: true,
        wellness: true,
        rating: 4.5,
        reviews: 10,
        inStock: true,
        brands: "VNEEDS"
    }, {
        _id: "aaa22",
        name: "Men Pullover Cotton T-shirt",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 80,
        offerPrice: 100,
        offPrice: 20,
        image: [product_9, productHo_9, productHo2_8, productHo3_8],
        category: "wellness",
        subCategory: "Topwear",
        sizes: ["M", "L", "XL"],
        date: 1716621345448,
        bestseller: true,
        wellness: true,
        rating: 4.5,
        reviews: 10,
        inStock: true,
        brands: "VNEEDS"
    }, {
        _id: "aaa23",
        name: "Men Pullover Cotton T-shirt",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 80,
        offerPrice: 100,
        offPrice: 20,
        image: [product_10, productHo_10,],
        category: "electronics",
        subCategory: "Topwear",
        sizes: ["M", "L", "XL"],
        date: 1716621345448,
        bestseller: true,
        electronics: true,
        rating: 4.5,
        reviews: 10,
        inStock: true,
        brands: "VNEEDS"
    }, {
        _id: "aaa24",
        name: "Men Pullover Cotton T-shirt",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 80,
        offerPrice: 100,
        offPrice: 20,
        image: [product_10, productHo_10,],
        category: "electronics",
        subCategory: "Topwear",
        sizes: ["M", "L", "XL"],
        date: 1716621345448,
        bestseller: true,
        electronics: true,
        rating: 4.5,
        reviews: 10,
        inStock: true,
        brands: "VNEEDS"
    }, {
        _id: "aaa25",
        name: "Men Pullover Cotton T-shirt",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 80,
        offerPrice: 100,
        offPrice: 20,
        image: [product_10, productHo_10,],
        category: "electronics",
        subCategory: "Topwear",
        sizes: ["M", "L", "XL"],
        date: 1716621345448,
        bestseller: true,
        electronics: true,
        rating: 4.5,
        reviews: 10,
        inStock: true,
        brands: "VNEEDS"
    }, {
        _id: "aaa26",
        name: "Men Pullover Cotton T-shirt",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 80,
        offerPrice: 100,
        offPrice: 20,
        image: [product_10, productHo_10,],
        category: "electronics",
        subCategory: "Topwear",
        sizes: ["M", "L", "XL"],
        date: 1716621345448,
        bestseller: true,
        electronics: true,
        rating: 4.5,
        reviews: 10,
        inStock: true,
        brands: "VNEEDS"
    },

]
























// export const productData = [
//     {
//         id: 2,
//         image: product_1,
//         alt: "Product 2",
//         category: "Man",
//         title: "Product 2",
//         brand: "Coach",
//         price: "$ 100.00",
//         offerPrice: "$ 120.00",
//         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel libero eu lectus scelerisque congue non eget nisi. Sed tristique, diam vel fringilla cursus, justo mauris faucibus lectus, vel efficitur justo neque id eros.",
//         colors: ["Black", "White", "Red"],
//         sizes: ["S", "M", "L"],

//         inStock: true,

// },
// ]