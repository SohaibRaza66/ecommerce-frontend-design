import React from 'react'
import { MdKeyboardArrowDown } from "react-icons/md";
const Copyright = () => {
  return (
    <>
    <div className='bg-gray-100'>
    <div className="copyright container m-auto w-full flex items-center justify-between p-4">
        <p className='text-start w-max'>&copy; 2023 ECommerce.</p>
        <p className='text-end flex w-max items-center'><img src="US@2x.jpg" alt="" className='w-4' /> English <MdKeyboardArrowDown /></p>
    </div>
    </div>
    </>
  )
}

export default Copyright