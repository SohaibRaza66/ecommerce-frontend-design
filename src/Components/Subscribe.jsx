import React from 'react'
import { FiMail } from 'react-icons/fi'

const Subscribe = () => {
  return (
    <div className="bg-gray-200 py-8">
      <div className="container m-auto text-center">
        <h2 className="font-semibold text-lg mb-2">Subscribe on our newsletter</h2>
        <p className="text-sm text-gray-700 mb-4">
          Get daily news on upcoming offers from many suppliers all over the world
        </p>
        <form className="flex justify-center items-center gap-2 max-w-md m-auto">
          <div className="relative w-full">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
              <FiMail />
            </span>
            <input
              type="email"
              placeholder="Email"
              className="pl-10 pr-3 py-2 rounded-md border border-gray-300 w-full outline-none"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-5 py-2 rounded-md font-semibold"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  )
}

export default Subscribe