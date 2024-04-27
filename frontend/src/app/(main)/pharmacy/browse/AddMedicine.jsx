
import React from 'react'

const pharmacy = () => {
  return (
    <>
    <div className="bg-gray-100 dark:bg-gray-800 py-8">
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex flex-col md:flex-row -mx-4">
      <div className="md:flex-1 px-4">
        <div className="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
          <img
            className="w-full h-full object-cover"
            src="about2.jpg"
            alt="Product Image"
          />
        </div>
        <div className="flex -mx-2 mb-4">
          <div className="w-1/2 px-2">
            <button className="w-full bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700">
              Add to Cart
            </button>
          </div>
          <div className="w-1/2 px-2">
            <button className="w-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded-full font-bold hover:bg-gray-300 dark:hover:bg-gray-600">
              Add to Wishlist
            </button>
          </div>
        </div>
      </div>
      <div className="md:flex-1 px-4">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
          Product Name
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
          <input type='text' ></input>
        </p>
        <div className="flex mb-4">
          <div className="mr-4">
            <span className="font-bold text-gray-700 dark:text-gray-300">
              Price:
            </span>
            <input type="number"  />
           
          </div>
          <div>
            <span className="font-bold text-gray-700 dark:text-gray-300">
              Availability:
            </span>
            <span className="text-gray-600 dark:text-gray-300">In Stock</span>
          </div>
        </div>
        <div className="mb-4">
          <span className="font-bold text-gray-700 dark:text-gray-300">
           Type of Medicine:
          </span>
          <div className="flex items-center mt-2">
          <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">
              tablets
            </button>
            <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">
              capsule
            </button>
            <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">
              syrup
            </button>
          </div>
        </div>
        <div className="mb-4">
          <span className="font-bold text-gray-700 dark:text-gray-300">
            Power of medicine:
          </span>
          <div className="flex items-center mt-2">
            <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">
              250mg
            </button>
            <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">
              500mg
            </button>
            <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">
              750mg
            </button>
            <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">
              1000mg
            </button>
           
          </div>
        </div>
        <div>
          <span className="font-bold text-gray-700 dark:text-gray-300">
            Product Description:
          </span>
          <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
           
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

    
    
    
    
    </>
  )
}

export default pharmacy