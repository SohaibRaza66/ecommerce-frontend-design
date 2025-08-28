import React, { useState } from 'react'

const Recommended = () => {
  const [items] = useState([
    {
      img: 'Blue_Shirt.jpg',
      price: '$10.30',
      title: 'T-shirts with multiple colors, for men'
    },
    {
      img: 'Brown_Jacket.jpg',
      price: '$10.30',
      title: 'Jeans shorts for men blue color'
    },
    {
      img: 'image 30.jpg',
      price: '$12.50',
      title: 'Brown winter coat medium size'
    },
    {
      img: 'image 24.jpg',
      price: '$34.00',
      title: 'Jeans bag for travel for men'
    },
    {
      img: 'image 26.jpg',
      price: '$99.00',
      title: 'Leather wallet'
    },
    {
      img: 'Jean_Short.jpg',
      price: '$3.99',
      title: 'Canon camera black, 100x zoom'
    },
    {
      img: 'image 86.jpg',
      price: '$8.99',
      title: 'Headset for gaming with mic'
    },
    {
      img: 'image 26.jpg',
      price: '$10.30',
      title: 'Smartwatch silver color modern'
    },
    {
      img: 'image 90.jpg',
      price: '$10.30',
      title: 'Blue wallet for men leather material'
    },
    {
      img: 'image 85.jpg',
      price: '$80.95',
      title: 'Jeans bag for travel for men'
    }
  ]);

  return (
    <div className="rounded-md p-6 mt-4 container m-auto">
      <h2 className="font-semibold text-lg mb-4">Recommended items</h2>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {items.map((item, idx) => (
          <div key={idx} className="bg-white rounded-md p-4 flex flex-col items-center">
            <img src={item.img} alt={item.title} className="h-24 mb-3 object-contain" />
            <div className="font-bold text-gray-800 mb-1">{item.price}</div>
            <div className="text-sm text-gray-600 text-center">{item.title}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Recommended