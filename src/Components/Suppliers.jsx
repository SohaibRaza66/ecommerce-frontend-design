import React from 'react'

const suppliers = [
  { flag: 'AE@2x.jpg', name: 'Arabic Emirates', url: 'shopname.ae' },
  { flag: 'AU@2x.jpg', name: 'Australia', url: 'shopname.au' },
  { flag: 'US@2x.jpg', name: 'United States', url: 'shopname.us' },
  { flag: 'RU@2x.jpg', name: 'Russia', url: 'shopname.ru' },
  { flag: 'IT@2x.jpg', name: 'Italy', url: 'shopname.it' },
  { flag: 'DK@2x.jpg', name: 'Denmark', url: 'denmark.com.dk' },
  { flag: 'FR@2x.jpg', name: 'France', url: 'shopname.com.fr' },
  { flag: 'AE@2x.jpg', name: 'Arabic Emirates', url: 'shopname.ae' },
  { flag: 'CN@2x.jpg', name: 'China', url: 'shopname.ac' },
  { flag: 'GB@2x.jpg', name: 'Great Britain', url: 'shopname.co.uk' },
]

const Suppliers = () => {
  return (
    <div className="container m-auto bg-gray-50 rounded-md p-6 mt-4">
      <h2 className="font-semibold text-lg mb-4">Suppliers by region</h2>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-y-4 gap-x-8">
        {suppliers.map((supplier, idx) => (
          <div key={idx} className="flex items-center gap-2">
            <img src={supplier.flag} alt={supplier.name} className="w-6 h-6 rounded-sm" />
            <div>
              <div className="text-sm font-medium text-gray-800">{supplier.name}</div>
              <div className="text-xs text-gray-500">{supplier.url}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Suppliers