import React, { useState, useEffect } from 'react'

const Offers = () => {
  const targetDate = new Date(Date.now() + 5 * 24 * 60 * 60 * 1000);

  const calculateTimeLeft = () => {
    const now = new Date();
    const difference = targetDate - now;
    let timeLeft = {
      days: '00',
      hours: '00',
      minutes: '00',
      seconds: '00'
    };
    if (difference > 0) {
      timeLeft = {
        days: String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(2, '0'),
        hours: String(Math.floor((difference / (1000 * 60 * 60)) % 24)).padStart(2, '0'),
        minutes: String(Math.floor((difference / (1000 * 60)) % 60)).padStart(2, '0'),
        seconds: String(Math.floor((difference / 1000) % 60)).padStart(2, '0')
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <div className="container bg-white rounded-md mt-4 md:flex m-auto grid">
        <div className="time p-4">
          <h2 className="text-2xl font-semi-bold">Deals and Offer</h2>
          <p className='text-gray-400'>Hygiene Equipments</p>
          <div className="timer flex mt-2">
            <p className='grid ms-2 justify-center items-center text-center p-2 rounded-md bg-gray-500 text-white'>
              {timeLeft.days} <span>Days</span>
            </p>
            <p className='grid ms-2 justify-center items-center text-center p-2 rounded-md bg-gray-500 text-white'>
              {timeLeft.hours} <span>Hours</span>
            </p>
            <p className='grid ms-2 justify-center items-center text-center p-2 rounded-md bg-gray-500 text-white'>
              {timeLeft.minutes} <span>Minutes</span>
            </p>
            <p className='grid ms-2 justify-center items-center text-center p-2 rounded-md bg-gray-500 text-white'>
              {timeLeft.seconds} <span>Seconds</span>
            </p>
          </div>
        </div>
        <div className='offers md:flex grid'>
          <div className="img w-3/12 p-4">
            <img src="image 35.jpg" alt="Offer 1" className='w-40 h-40 object-contain m-auto' />
            <p className='m-auto w-max mt-2 mb-2'>Smart Watches</p>
            <p className='bg-red-300 text-red-600 w-max px-4 py-2 rounded-4xl m-auto'>-25%</p>
          </div>
          <div className="img w-3/12 p-4">
            <img src="image 34.jpg" alt="Offer 2" className='w-40 h-40 object-contain m-auto' />
            <p className='m-auto w-max mt-2 mb-2'>Laptops</p>
            <p className='bg-red-300 text-red-600 w-max px-4 py-2 rounded-4xl m-auto'>-15%</p>
          </div>
          <div className="img w-3/12 p-4">
            <img src="image 28.jpg" alt="Offer 3" className='w-40 h-40 object-contain m-auto' />
            <p className='m-auto w-max mt-2 mb-2'>GoPro Cameras</p>
            <p className='bg-red-300 text-red-600 w-max px-4 py-2 rounded-4xl m-auto'>-40%</p>
          </div>
          <div className="img w-3/12 p-4">
            <img src="image 29.jpg" alt="Offer 4" className='w-40 h-40 object-contain m-auto' />
            <p className='m-auto w-max mt-2 mb-2'>HeadPhones</p>
            <p className='bg-red-300 text-red-600 w-max px-4 py-2 rounded-4xl m-auto'>-25%</p>
          </div>
          <div className="img w-3/12 p-4">
            <img src="image 23.jpg" alt="Offer 4" className='w-40 h-40 object-contain m-auto' />
            <p className='m-auto w-max mt-2 mb-2'>Canon Cameras</p>
            <p className='bg-red-300 text-red-600 w-max px-4 py-2 rounded-4xl m-auto'>-25%</p>
          </div>
        </div>
      </div>
    </>
  )
}
export default Offers