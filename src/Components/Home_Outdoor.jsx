import React,{useState} from 'react'

const Home_Outdoor = () => {
  const [data, setData] = useState([
    {
      id: 1,
      title: "Soft Chair",
      description: "from USD 19",
      image: "rasm_1.jpg"
    },
    {
      id: 2,
      title: "Sofa & Chair",
      description: "from USD 19",
      image: "image 94.jpg"
    },
    {
      id: 3,
      title: "Kitchen Dishes",
      description: "from USD 19",
      image: "image 93.jpg"
    },
    {
      id: 4,
      title: "Smart Watches",
      description: "from USD 19",
      image: "image 90.jpg"
    },
    {
      id: 5,
      title: "Kitchen Mixer",
      description: "from USD 19",
      image: "image 88.jpg"
    },
    {
      id: 6,
      title: "Blenders",
      description: "from USD 19",
      image: "image 87.jpg"
    },
    {
      id: 7,
      title: "Home Appliance",
      description: "from USD 19",
      image: "rasm.jpg"
    },
    {
      id: 8,
      title: "Coffee Maker",
      description: "from USD 19",
      image: "image 89.jpg"
    }

  ]);
  return (
    <>
    <div className="container m-auto bg-white rounded-md mt-4 flex">
      <div className="p-4 bg w-80">
        <h2 className="text-2xl font-semi-bold w-1/2">Home and Outdoor</h2>
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
                <img src={item.image} alt={item.title} className="w-auto h-32 object-fit ms-auto" />
              </div>
            ))}
          </div>
      </div>
    </div>
    </>
  )
}

export default Home_Outdoor