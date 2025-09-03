import React, { useState } from 'react'
import { FaCcVisa,FaCcMastercard ,FaCcApplePay ,FaPaypal} from "react-icons/fa";
const cartItems = [
  {
    img: 'Blue_Shirt.jpg',
    title: 'T-shirts with multiple colors, for men and lady',
    price: 78.99,
    qty: 9,
    seller: 'Artel Market',
    details: 'Size: medium, Color: blue, Material: Plastic'
  },
  {
    img: 'image 26.jpg',
    title: 'T-shirts with multiple colors, for men and lady',
    price: 39.00,
    qty: 3,
    seller: 'Best factory LLC',
    details: 'Size: medium, Color: blue, Material: Plastic'
  },
  {
    img: 'image 94.jpg',
    title: 'T-shirts with multiple colors, for men and lady',
    price: 170.50,
    qty: 1,
    seller: 'Artel Market',
    details: 'Size: medium, Color: blue, Material: Plastic'
  }
]

const savedItems = [
  {
    img: 'image 32.jpg',
    price: '$99.50',
    title: 'GoPro HERO6 4K Action Camera - Black'
  },
  {
    img: 'image 22.jpg',
    price: '$99.50',
    title: 'GoPro HERO6 4K Action Camera - Black'
  },
  {
    img: 'image 35.jpg',
    price: '$99.50',
    title: 'GoPro HERO6 4K Action Camera - Black'
  },
  {
    img: 'image 34.jpg',
    price: '$99.50',
    title: 'GoPro HERO6 4K Action Camera - Black'
  }
]

const Cart = () => {
  const [coupon, setCoupon] = useState('')
  const subtotal = 1403.97
  const discount = 60.00
  const tax = 14.00
  const total = subtotal - discount + tax

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="container m-auto flex flex-col lg:flex-row gap-6">
        {/* Cart Section */}
        <div className="flex-1">
          <h2 className="font-semibold text-lg mb-4">My cart (3)</h2>
          <div className="bg-white rounded-md border p-4 mb-2">
            {cartItems.map((item, idx) => (
              <div key={idx} className="flex items-center border-b last:border-b-0 py-4 gap-4">
                <img src={item.img} alt={item.title} className="w-16 h-16 object-contain rounded" />
                <div className="flex-1">
                  <div className="font-medium text-gray-800">{item.title}</div>
                  <div className="text-xs text-gray-500">{item.details}</div>
                  <div className="text-xs text-gray-500">Seller: {item.seller}</div>
                  <div className="flex gap-2 mt-2">
                    <button className="bg-red-50 text-red-500 px-3 py-1 rounded text-xs border">Remove</button>
                    <button className="bg-blue-50 text-blue-500 px-3 py-1 rounded text-xs border">Save for later</button>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <div className="font-semibold text-gray-800">${item.price.toFixed(2)}</div>
                  <select className="border rounded px-2 py-1 text-sm">
                    {[...Array(10).keys()].map(n => (
                      <option key={n+1} value={n+1} selected={item.qty === n+1}>Qty: {n+1}</option>
                    ))}
                  </select>
                </div>
              </div>
            ))}
            <div className="flex justify-between items-center pt-4">
              <button className="bg-blue-50 text-blue-600 px-4 py-2 rounded font-medium flex items-center gap-2">
                &#8592; Back to shop
              </button>
              <button className="text-blue-600 px-4 py-2 rounded font-medium">Remove all</button>
            </div>
          </div>
          {/* Cart Info */}
          <div className="flex justify-between text-center py-6">
            <div className="flex-1 flex flex-col items-center">
              <span className="text-gray-500 text-2xl mb-1">&#128274;</span>
              <span className="text-xs font-medium">Secure payment</span>
              <span className="text-xs text-gray-400">Have you ever finally just</span>
            </div>
            <div className="flex-1 flex flex-col items-center">
              <span className="text-gray-500 text-2xl mb-1">&#128222;</span>
              <span className="text-xs font-medium">Customer support</span>
              <span className="text-xs text-gray-400">Have you ever finally just</span>
            </div>
            <div className="flex-1 flex flex-col items-center">
              <span className="text-gray-500 text-2xl mb-1">&#128666;</span>
              <span className="text-xs font-medium">Free delivery</span>
              <span className="text-xs text-gray-400">Have you ever finally just</span>
            </div>
          </div>
          {/* Saved for later */}
          <div className="bg-white rounded-md border p-4 mt-4">
            <h3 className="font-semibold mb-4">Saved for later</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {savedItems.map((item, idx) => (
                <div key={idx} className="border rounded-md p-3 flex flex-col items-center">
                  <img src={item.img} alt={item.title} className="w-40 h-40 object-contain mb-2" />
                  <div className="font-bold text-gray-800">{item.price}</div>
                  <div className="text-xs text-gray-600 text-center mb-2">{item.title}</div>
                  <button className="bg-blue-50 text-blue-600 px-3 py-1 rounded text-xs border">Move to cart</button>
                </div>
              ))}
            </div>
          </div>
          {/* Discount Banner */}
          <div className="bg-blue-500 text-white rounded-md p-4 mt-4 flex justify-between items-center">
            <div>
              <span className="font-semibold text-lg">Super discount on more than 100 USD</span>
              <div className="text-xs">Have you ever finally just write dummy info</div>
            </div>
            <button className="bg-orange-400 text-white px-5 py-2 rounded font-semibold">Shop now</button>
          </div>
        </div>
        {/* Checkout Section */}
        <div className="w-full lg:w-96">
          <div className="bg-white rounded-md border p-4 mb-4">
            <div className="font-medium mb-2">Have a coupon?</div>
            <div className="flex gap-2 mb-4">
              <input
                type="text"
                placeholder="Add coupon"
                value={coupon}
                onChange={e => setCoupon(e.target.value)}
                className="border rounded px-2 py-1 flex-1"
              />
              <button className="bg-blue-500 text-white px-4 py-1 rounded font-semibold">Apply</button>
            </div>
            <div className="flex justify-between text-sm mb-1">
              <span>Subtotal:</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-sm mb-1">
              <span>Discount:</span>
              <span className="text-green-600">- ${discount.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-sm mb-1">
              <span>Tax:</span>
              <span className="text-green-600">+ ${tax.toFixed(2)}</span>
            </div>
            <div className="flex justify-between font-bold text-lg mt-2 mb-4">
              <span>Total:</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <button className="bg-green-500 text-white w-full py-2 rounded font-semibold text-lg mb-2">Checkout</button>
            <div className="flex gap-2 justify-center">
                <FaCcVisa className="text-3xl text-gray-700" />
                <FaCcMastercard className="text-3xl text-gray-700" />
                <FaPaypal className="text-3xl text-gray-700" />
                <FaCcApplePay className="text-3xl text-gray-700" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart