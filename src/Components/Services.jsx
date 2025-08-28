import React, { useState } from 'react'
import { FiSearch, FiBox, FiSend, FiMapPin } from 'react-icons/fi'

const Services = () => {
  const [services] = useState([
    {
      img: 'image 108.jpg',
      icon: <FiSearch size={24} />,
      title: 'Source from Industry Hubs'
    },
    {
      img: 'image 104.jpg',
      icon: <FiBox size={24} />,
      title: 'Customize Your Products'
    },
    {
      img: 'image 106.jpg',
      icon: <FiSend size={24} />,
      title: 'Fast, reliable shipping by ocean or air'
    },
    {
      img: 'image 107.jpg',
      icon: <FiMapPin size={24} />,
      title: 'Product monitoring and inspection'
    }
  ])

  return (
    <div className="bg-gray-50 rounded-md p-6 mt-4 container m-auto">
      <h2 className="font-semibold text-lg mb-4">Our extra services</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {services.map((service, idx) => (
          <div key={idx} className="bg-white rounded-md border border-gray-400 p-0 flex flex-col overflow-hidden">
            <div className="relative h-28 w-full">
              <img src={service.img} alt={service.title} className="object-cover w-full h-full" />
              <div className="absolute top-2 right-2 bg-blue-100 rounded-full p-2 shadow">
                {service.icon}
              </div>
            </div>
            <div className="p-4 text-sm text-gray-700 font-medium w-1/2">{service.title}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Services