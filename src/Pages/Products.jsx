import React, { useState } from 'react'
import { FiHeart } from 'react-icons/fi'
import { AiFillStar } from 'react-icons/ai'
import Subscribe from '../Components/Subscribe'
import { IoGrid } from "react-icons/io5";
import { FaBars } from "react-icons/fa";
const products = [
  {
    img: 'image 33.jpg',
    title: 'Canon Cmrea EOS 2000, Black 10x zoom',
    price: '$998.00',
    oldPrice: '$1182.00',
    rating: 7.5,
    orders: 154,
    shipping: 'Free Shipping',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'
  },
  {
    img: 'image 23.jpg',
    title: 'GoPro HERO6 4K Action Camera - Black',
    price: '$998.00',
    oldPrice: '',
    rating: 7.5,
    orders: 154,
    shipping: 'Free Shipping',
    desc: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit'
  },
  {
    img: 'image 32.jpg',
    title: 'GoPro HERO6 4K Action Camera - Black',
    price: '$998.00',
    oldPrice: '',
    rating: 7.5,
    orders: 154,
    shipping: 'Free Shipping',
    desc: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit'
  },
  {
    img: 'image 34.jpg',
    title: 'GoPro HERO6 4K Action Camera - Black',
    price: '$998.00',
    oldPrice: '',
    rating: 7.5,
    orders: 154,
    shipping: 'Free Shipping',
    desc: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit'
  },
  {
    img: 'image 35.jpg',
    title: 'GoPro HERO6 4K Action Camera - Black',
    price: '$998.00',
    oldPrice: '$1182.00',
    rating: 7.5,
    orders: 154,
    shipping: 'Free Shipping',
    desc: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit'
  },
  {
    img: 'image 86.jpg',
    title: 'GoPro HERO6 4K Action Camera - Black',
    price: '$998.00',
    oldPrice: '',
    rating: 7.5,
    orders: 154,
    shipping: 'Free Shipping',
    desc: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit'
  }
]

const Products = () => {
  // Example filter state (not functional, for UI only)
  const [filters] = useState({
    category: ['Mobile accessory', 'Electronics', 'Smartphones', 'Modern tech'],
    brands: ['Samsung', 'Apple', 'Huawei', 'Pocco', 'Lenovo'],
    features: ['Metallic', 'Plastic cover', '8GB Ram', 'Super power', 'Large Memory'],
    condition: ['Any', 'Refurbished', 'Brand new', 'Old items'],
    ratings: [5, 4, 3, 2, 1]
  })
const [view, setView] = useState('grid'); // 'grid' or 'list'
  return (
    <>
    <div className="bg-gray-50 min-h-screen py-6">
      <div className="container m-auto flex gap-6">
        {/* Sidebar Filters */}
        <aside className="w-72 bg-white rounded-md p-4 border">
          <div className="mb-6">
            <h3 className="font-semibold mb-2">Category</h3>
            <ul>
              {filters.category.map((cat, i) => (
                <li key={i} className="text-sm text-gray-700 mb-1 cursor-pointer hover:underline">{cat}</li>
              ))}
              <li className="text-blue-500 text-sm cursor-pointer">See all</li>
            </ul>
          </div>
          <div className="mb-6">
            <h3 className="font-semibold mb-2">Brands</h3>
            <ul>
              {filters.brands.map((brand, i) => (
                <li key={i} className="flex items-center mb-1">
                  <input type="checkbox" className="mr-2" />
                  <span className="text-sm text-gray-700">{brand}</span>
                </li>
              ))}
              <li className="text-blue-500 text-sm cursor-pointer">See all</li>
            </ul>
          </div>
          <div className="mb-6">
            <h3 className="font-semibold mb-2">Features</h3>
            <ul>
              {filters.features.map((feature, i) => (
                <li key={i} className="flex items-center mb-1">
                  <input type="checkbox" className="mr-2" />
                  <span className="text-sm text-gray-700">{feature}</span>
                </li>
              ))}
              <li className="text-blue-500 text-sm cursor-pointer">See all</li>
            </ul>
          </div>
          <div className="mb-6">
            <h3 className="font-semibold mb-2">Price range</h3>
            <div className="flex flex-col gap-2">
              <input type="range" min="0" max="999999" className="w-full" />
              <div className="flex gap-2">
                <input type="number" placeholder="Min" className="border rounded px-2 py-1 w-1/2" />
                <input type="number" placeholder="Max" className="border rounded px-2 py-1 w-1/2" />
              </div>
              <button className="bg-blue-500 text-white rounded px-3 py-1 mt-2">Apply</button>
            </div>
          </div>
          <div className="mb-6">
            <h3 className="font-semibold mb-2">Condition</h3>
            <ul>
              {filters.condition.map((cond, i) => (
                <li key={i} className="flex items-center mb-1">
                  <input type="radio" name="condition" className="mr-2" />
                  <span className="text-sm text-gray-700">{cond}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Ratings</h3>
            <ul>
              {filters.ratings.map((rate, i) => (
                <li key={i} className="flex items-center mb-1">
                  <input type="checkbox" className="mr-2" />
                  <span className="flex">
                    {[...Array(rate)].map((_, idx) => (
                      <AiFillStar key={idx} className="text-yellow-400" />
                    ))}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </aside>
        {/* Products List */}
        <main className="flex-1">
          {/* Breadcrumb */}
          <nav className="text-xs text-gray-500 mb-4 flex items-center gap-2">
            <span>Home</span>
            <span>&gt;</span>
            <span>Clothings</span>
            <span>&gt;</span>
            <span>Men's wear</span>
            <span>&gt;</span>
            <span className="text-gray-700 font-medium">Summer clothing</span>
          </nav>
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <div>
              <span className="font-semibold">12,911 items in </span>
              <span className="font-semibold text-blue-600">Mobile accessory</span>
            </div>
            <div className="flex items-center gap-2">
              <label className="flex items-center gap-1 text-sm">
                <input type="checkbox" className="accent-blue-500" />
                Verified only
              </label>
              <select className="border rounded px-2 py-1 text-sm">
                <option>Featured</option>
                <option>Newest</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
              </select>
              <button className="border rounded px-2 py-1 text-sm" onClick={() => setView('grid')}>
                <span className="material-icons cursor-pointer" title='Grid View'><IoGrid /></span>
              </button>
              <button className="border rounded px-2 py-1 text-sm" onClick={() => setView('list')}>
                <span className="material-icons cursor-pointer" title='List View'><FaBars /></span>
              </button>
            </div>
          </div>
          {/* Products */}
          {view === 'grid' ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product, idx) => (
                <div key={idx} className="bg-white rounded-md border p-4 flex flex-col items-center relative shadow-sm">
                  <button className="absolute top-4 right-4 bg-white rounded-full border p-2 hover:bg-blue-50">
                    <FiHeart className="text-gray-400" />
                  </button>
                  <img src={product.img} alt={product.title} className="w-32 h-32 object-contain mb-4" />
                  <div className="w-full">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-lg font-bold text-gray-800">{product.price}</span>
                      {product.oldPrice && (
                        <span className="text-gray-400 line-through text-sm">{product.oldPrice}</span>
                      )}
                    </div>
                    <div className="flex items-center gap-2 text-xs mb-1">
                      <span className="flex items-center text-yellow-500 font-semibold">
                        <AiFillStar className="mr-1" /> {product.rating}
                      </span>
                      <span className="text-gray-500">{product.orders} orders</span>
                      <span className="text-green-600">{product.shipping}</span>
                    </div>
                    <div className="font-medium text-gray-800 text-sm mb-1">{product.title}</div>
                    <div className="text-xs text-gray-500 mb-2">{product.desc}</div>
                    <a href="#" className="text-blue-500 text-xs font-medium">View details</a>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col gap-4">
              {products.map((product, idx) => (
                <div key={idx} className="bg-white rounded-md border flex p-4 gap-4 items-center relative">
                  <img src={product.img} alt={product.title} className="w-28 h-28 object-contain rounded" />
                  <div className="flex-1">
                    <div className="font-semibold text-gray-800">{product.title}</div>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-xl font-bold">{product.price}</span>
                      {product.oldPrice && (
                        <span className="text-gray-400 line-through text-sm">{product.oldPrice}</span>
                      )}
                    </div>
                    <div className="flex items-center gap-2 text-xs mt-1">
                      <span className="flex items-center text-yellow-500">
                        <AiFillStar className="mr-1" /> {product.rating}
                      </span>
                      <span className="text-gray-500">{product.orders} orders</span>
                      <span className="text-green-600">{product.shipping}</span>
                    </div>
                    <div className="text-xs text-gray-500 mt-1">{product.desc}</div>
                    <a href="#" className="text-blue-500 text-xs mt-2 inline-block">View details</a>
                  </div>
                  <button className="absolute top-4 right-4 bg-white rounded-full border p-2 hover:bg-blue-50">
                    <FiHeart className="text-gray-400" />
                  </button>
                </div>
              ))}
            </div>
          )}
          {/* Pagination */}
          <div className="flex items-center justify-end gap-2 mt-6">
            <select className="border rounded px-2 py-1 text-sm">
              <option>Show 10</option>
              <option>Show 20</option>
              <option>Show 50</option>
            </select>
            <button className="border rounded px-2 py-1 text-sm">1</button>
            <button className="border rounded px-2 py-1 text-sm">2</button>
            <button className="border rounded px-2 py-1 text-sm">3</button>
            <button className="border rounded px-2 py-1 text-sm">&gt;</button>
          </div>
        </main>
      </div>
    </div>
    <Subscribe/>
    </>
  )
}

export default Products