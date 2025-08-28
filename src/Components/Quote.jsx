import React from 'react'

const Quote = () => {
  return (
    <div className="rounded-md p-6 flex items-center container mt-4 m-auto bg2">
      <div className="w-1/2 text-white p-8">
        <h2 className="text-2xl font-bold mb-2">An easy way to send<br />requests to all suppliers</h2>
        <p className="text-md">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
      </div>
      <div className="w-1/2 flex justify-center">
        <div className="bg-white rounded-md shadow-md p-6 min-w-[340px]">
          <h3 className="font-semibold mb-4">Send quote to suppliers</h3>
          <input
            type="text"
            placeholder="What item you need?"
            className="border border-gray-300 rounded-md p-2 w-full mb-3"
          />
          <textarea
            placeholder="Type more details"
            className="border border-gray-300 rounded-md p-2 w-full mb-3"
            rows={3}
          />
          <div className="flex gap-2 mb-4">
            <input
              type="number"
              placeholder="Quantity"
              className="border border-gray-300 rounded-md p-2 w-1/2"
            />
            <select className="border border-gray-300 rounded-md p-2 w-1/2">
              <option value="pcs">Pcs</option>
              <option value="kg">Kg</option>
              <option value="litre">Litre</option>
            </select>
          </div>
          <button className="bg-blue-500 text-white rounded-md p-2 w-full font-semibold">Send inquiry</button>
        </div>
      </div>
    </div>
  )
}

export default Quote