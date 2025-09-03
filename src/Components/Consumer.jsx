import React,{useState} from 'react'

const Consumer = () => {
  const [data, setData] = useState([
      {
        id: 1,
        title: "Ssmart Watches",
        description: "from USD 19",
        image: "image 35.jpg"
      },
      {
        id: 2,
        title: "Cameras",
        description: "from USD 19",
        image: "image 28.jpg"
      },
      {
        id: 3,
        title: "Headphones",
        description: "from USD 19",
        image: "image 86.jpg"
      },
      {
        id: 4,
        title: "Smart Watches",
        description: "from USD 19",
        image: "image 85.jpg"
      },
      {
        id: 5,
        title: "Gaming Set",
        description: "from USD 19",
        image: "image 29.jpg"
      },
      {
        id: 6,
        title: "Laptops and PC",
        description: "from USD 19",
        image: "image 34.jpg"
      },
      {
        id: 7,
        title: "Smartphones",
        description: "from USD 19",
        image: "image 32.jpg"
      },
      {
        id: 8,
        title: "Electronic Kettle",
        description: "from USD 19",
        image: "image 33.jpg"
      }
  ]);
  return (
     <>
    <div className="container m-auto bg-white rounded-md mt-4 flex">
      <div className="p-4 bg1 w-80">
        <h2 className="text-2xl font-semi-bold w-3/4">Consumer electronics and gadgets</h2>
        <button className='bg-gray-100 px-4 py-2 rounded-md'>Source Now</button>
      </div>
      <div className='w-full'>
          <div className="grid md:grid-cols-4">
            {data.map(item => (
              <div key={item.id} className="border-b border-r p-2 border-gray-300 flex">
                <div className="data">
                <h4 className="font-bold">{item.title}</h4>
                <p>{item.description}</p>
                </div>
                <img src={item.image} alt={item.title} className="md:w-auto h-32 object-fit ms-auto w-1/2" />
              </div>
            ))}
          </div>
      </div>
    </div>
    </>
  )
}

export default Consumer