import React, { useContext, useState, useEffect, useRef } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ProductContext } from '../context/ProductContext';
import { motion, useAnimation } from 'framer-motion';
import StarRating from '../components/Rating';
import { cart, heart, swap } from '../assets/assets';
import StarReviewsRating from '../components/StarReviewsRating';
import ProductItem from '../components/productItem';
import RelatedProductsSlider from '../components/RelatedProduct';
import { useCart } from '../context/CartContext';
import { toast } from "react-toastify"


const Product = () => {
  const { id } = useParams();
  const { productData } = useContext(ProductContext);
  const [product, setProduct] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [zoomStyle, setZoomStyle] = useState({});
  const controls = useAnimation();
  const [reviews, setReviews] = useState([]);
  const [activeTab, setActiveTab] = useState('description');
  const [reviewForm, setReviewForm] = useState({
    name: '',
    comment: '',
    rating: 0,
    hoverRating: 1
  })

  const [relatedProduct, setRelatedProduct] = useState([])
  const [isAdding, setIsAdding] = useState(false);


  const imageContainerRef = useRef(null);




  const { currency } = useContext(ProductContext)
  const { addToCart } = useCart();

  // Handle mouse move for zoom effect
  // const handleMouseMove = (e) => {
  //   if (!imageContainerRef.current) return;
  //   const { left, top, width, height } = imageContainerRef.current.getBoundingClientRect();
  //   const x = ((e.clientX - left) / width) * 100;
  //   const y = ((e.clientY - top) / height) * 100;

  //   setZoomStyle({
  //     transformOrigin: `${x}% ${y}%`,
  //     transform: 'scale(2)'
  //   });
  // };

  // Handle drag end for slide animation
  const handleDragEnd = (event, info) => {
    const threshold = 50;
    if (info.offset.x > threshold) {
      goToPrevious();
    } else if (info.offset.x < -threshold) {
      goToNext();
    } else {
      controls.start({ x: -currentIndex * 100 + '%' });
    }
  };

  const goToNext = () => {
    const newIndex = (currentIndex + 1) % product.image.length;
    setCurrentIndex(newIndex);
    controls.start({
      x: -newIndex * 100 + '%',
      transition: { type: 'spring', stiffness: 300, damping: 30 }
    });
  };

  const goToPrevious = () => {
    const newIndex = (currentIndex - 1 + product.image.length) % product.image.length;
    setCurrentIndex(newIndex);
    controls.start({
      x: -newIndex * 100 + '%',
      transition: { type: 'spring', stiffness: 300, damping: 30 }
    });
  };




  useEffect(() => {
    if (productData && id) {
      const foundProduct = productData.find(item => item._id === id);
      if (foundProduct) setProduct(foundProduct);


      // get related product
      setRelatedProduct(foundProduct.category);

      const related = productData.filter(
        item => item.category === foundProduct.category && item._id !== id
      ).slice(0, 10)

      setRelatedProduct(related)
    }


    // reviews
    const savedReviews = localStorage.getItem(`reviews-${id}`);
    setReviews(savedReviews ? JSON.parse(savedReviews) : []);
  }, [id, productData]);

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    if (!reviewForm.name || !reviewForm.comment || reviewForm.rating === 0) {
      alert('Please fill all fields and select a rating');
      return;
    }

    const newReview = {
      ...reviewForm,
      date: new Date().toISOString(),
      id: Date.now()
    };

    const updatedReviews = [newReview, ...reviews];
    setReviews(updatedReviews);
    localStorage.setItem(`reviews-${id}`, JSON.stringify(updatedReviews));

    setReviewForm({ name: '', comment: '', rating: 0, hoverRating: 0 });
  };

  // add to cart 


  const handleAddToCart = () => {
    setIsAdding(true)



    const product = {
      id: id,
      name: name,
      price: price,
      image: image[0],
      quantity: 1,
  

    }

    setTimeout(() => {
      addToCart(product);
      setIsAdding(false)
      toast.success(`${name} added to cart!`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })


    }, 1000)
  }




  if (!product) return <div className="flex justify-center items-center h-64">Loading...</div>;

  return (
    <div className=" pt-10 container">
      <div className="flex gap-12 flex-col md:flex-row md:items-start items-center">

        <div className="hidden lg:block no-scrollbar gap-2 mt-4 overflow-x-auto py-2">
          {product.image.map((img, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className={`flex-shrink-0 w-16 h-16 rounded-md overflow-hidden cursor-pointer border-2 mt-2 ${index === currentIndex ? 'border-blue-500' : 'border-transparent'
                }`}
              onClick={() => {
                setCurrentIndex(index);
                controls.start({
                  x: -index * 100 + '%',
                  transition: { type: 'spring', stiffness: 300, damping: 30 }
                });
              }}
            >
              <img
                src={img}
                alt={`Thumbnail ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </div>
        {/* Image Gallery */}
        <div className="flex-1">
          {/* Main Image Container */}
          <div
            className="relative overflow-hidden h-[450px] w-[350px] lg:w-[400px] lg:h-[500px] rounded-lg cursor-pointer"
            ref={imageContainerRef}
            // onMouseMove={handleMouseMove}
            onMouseLeave={() => setZoomStyle({ transform: 'scale(1)' })}
          >
            <motion.div
              className="flex h-full"
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              onDragEnd={handleDragEnd}
              animate={controls}
              style={{ x: -currentIndex * 100 + '%' }}
            >
              {product.image.map((img, index) => (
                <motion.div
                  key={index}
                  className="flex-shrink-0 w-full h-full relative"
                  style={{ ...zoomStyle }}
                >
                  <img
                    src={img}
                    alt={`Product ${index + 1}`}
                    className="w-full h-full object-cover no-select no-drag "
                  />
                </motion.div>
              ))}
            </motion.div>

            {/* Navigation Arrows */}
            <button
              onClick={goToPrevious}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 shadow-md hover:bg-white"
            >
              &larr;
            </button>
            <button
              onClick={goToNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 shadow-md hover:bg-white"
            >
              &rarr;
            </button>
          </div>

          {/* Thumbnails */}
          <div className="flex lg:hidden gap-2 mt-4 overflow-x-auto py-2">
            {product.image.map((img, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className={`flex-shrink-0 w-16 h-16 rounded-md overflow-hidden cursor-pointer border-2 ${index === currentIndex ? 'border-blue-500' : 'border-transparent'
                  }`}
                onClick={() => {
                  setCurrentIndex(index);
                  controls.start({
                    x: -index * 100 + '%',
                    transition: { type: 'spring', stiffness: 300, damping: 30 }
                  });
                }}
              >
                <img
                  src={img}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="flex-1">
          <h1 className='text-2xl font-semibold'>{product.name}</h1>
          <div className="flex flex-wrap gap-4 items-center mt-2">
            <p className='text-sm text-black/40'>Brands : <span className='text-black'>{product.brands}</span></p>
            <div className='flex items-center gap-1 text-sm '>
              <StarReviewsRating rating={product.rating} />
              Review ({reviews.length})
            </div>
          </div>
          <div className="flex flex-row items-center flex-wrap gap-3 mt-2">
            <h1 className='text-primary font-semibold text-[18px]'>{currency}{product.price}.00</h1>
            <h3 className='line-through text-gray-400 font-semibold text-[18px]'>{currency}{product.offerPrice}.00</h3>
            <span className='text-gray-500 font-semibold flex gap-2 '>Available in Stock : <p className='text-[#0cae83]'>{product.inStock}</p></span>
          </div>
          <div className="mt-3">
            <p className='text-[16px] font-semibold text-gray-500'>{product.description}</p>
          </div>
          <div className="mt-4">
            <span className='text-[18px] font-semibold text-gray-700'>Free Shopping (Est. Delivery Time 2-3 Days)</span>
          </div>
          <div className="flex gap-5 items-center mt-6">
            <input
              type="number"
              className="w-[80px] p-2 border rounded-md"
              placeholder="1"
            />
            <button
              className={`flex gap-2 items-center justify-center m-2 buttonCard cursor-pointer ${isAdding ? 'opacity-100 cursor-not-allowed' : ''
                }`}
              onClick={handleAddToCart}
              disabled={isAdding}
            >
              {isAdding ? (
                <>
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-100" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Adding...
                </>
              ) : (
                <>
                  <img src={cart} alt="" className='h-5' />
                  Add to Cart
                </>
              )}
            </button>
          </div>
          <div className="flex items-center gap-4 mt-7  ">
            <button className='flex gap-2 items-center justify-center cursor-pointer' ><img src={heart} alt="" className='h-5' />Add to Wishilist</button>
            <button className='flex gap-2 items-center justify-center cursor-pointer'><img src={swap} alt="" className='h-6' /> Add to Compare</button>
          </div>

        </div>

        {/* Review Form */}


      </div>

      <div className="items-start py-8 ">
        {/* Tabs Navigation */}
        <div className="flex border-b mb-6">
          <button
            className={`px-4 py-2 ${activeTab === 'description' ? 'border-b-2 border-blue-600' : ''} cursor-pointer`}
            onClick={() => setActiveTab('description')}
          >
            Description
          </button>
          <button
            className={`px-4 py-2 ${activeTab === 'reviews' ? 'border-b-2 border-blue-600' : ''} cursor-pointer`}
            onClick={() => setActiveTab('reviews')}
          >
            Reviews ({reviews.length})
          </button>
        </div>

        {/* Description Tab */}
        {activeTab === 'description' && product && (
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">{product.name}</h2>
            <p className="text-gray-600">{product.description}</p>
          </div>
        )}

        {/* Reviews Tab */}
        {activeTab === 'reviews' && (
          <div className="space-y-8 max-w-3xl shadow-md">
            {/* Review Form */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Write a Review</h3>
              <form onSubmit={handleReviewSubmit}>
                <div className="mb-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full p-2 border rounded"
                    value={reviewForm.name}
                    onChange={(e) => setReviewForm({ ...reviewForm, name: e.target.value })}
                    required
                  />
                </div>

                <div className="mb-4">
                  <StarReviewsRating
                    rating={reviewForm.rating}
                    hoverRating={reviewForm.hoverRating}
                    onRate={(rating) => setReviewForm({ ...reviewForm, rating })}
                    onHover={(hoverRating) => setReviewForm({ ...reviewForm, hoverRating })}
                  />
                </div>

                <div className="mb-4">
                  <textarea
                    placeholder="Your Review"
                    className="w-full p-2 border rounded h-32"
                    value={reviewForm.comment}
                    onChange={(e) => setReviewForm({ ...reviewForm, comment: e.target.value })}
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
                >
                  SUBMIT REVIEW
                </button>
              </form>
            </div>

            {/* Reviews List */}
            <div className="space-y-6 px-4">
              {reviews.map((review) => (
                <div key={review.id} className="border-b pb-6">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold">{review.name}</h4>
                    <div className="flex items-center text-yellow-400">
                      {'★'.repeat(review.rating)}
                    </div>
                  </div>
                  <p className="text-gray-600">{review.comment}</p>
                  <p className="text-sm text-gray-400 mt-2">
                    {new Date(review.date).toLocaleDateString()}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Related Products Section */}
        <div className="">
          <RelatedProductsSlider relatedProducts={relatedProduct} />
        </div>

      </div>


    </div>

  );
};

export default Product