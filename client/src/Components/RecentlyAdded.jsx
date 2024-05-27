import React,{useRef} from 'react';
import { IoIosArrowBack,IoIosArrowForward} from "react-icons/io";


const properties = [
  {
    id: 1,
    price: '£185,000',
    address: 'Hyde Close, Ellesmere Port, CH65',
    description: '4 bedroom End of terrace house',
    imageUrl:'images/example1.jpg' , // Replace with actual image path
  },
  {
    id: 2,
    price: '£120,000',
    address: 'Bridge Street, Montrose, DD10',
    description: '2 bedroom Flat',
    imageUrl: 'images/example2.jpg', // Replace with actual image path
  },
  {
    id: 3,
    price: '£365,000',
    address: 'Hexham Road, Reading, RG2',
    description: '3 bedroom Terraced house',
    imageUrl: 'images/example3.jpg', // Replace with actual image path
  },
  {
    id: 4,
    price: '£310,000',
    address: 'Fairhaven Way, Cramlington, NE23',
    description: '4 bedroom Detached house',
    imageUrl: 'images/example4.jpg', // Replace with actual image path
  },
];

const RecentlyAdded = () => {
  const scrollContainer = useRef(null);

  const scroll = (direction) => {
      const { current } = scrollContainer;
      if (direction === 'left') {
          current.scrollLeft -= 300; // Adjust the scroll value as needed
      } else {
          current.scrollLeft += 300; // Adjust the scroll value as needed
      }
  };
  return (
    <div className="bg-white py-8">
        <div className="container mx-auto px-4">
            <h1 className="text-3xl font-semibold text-center mb-6">Recently added properties</h1>
            <div className="flex justify-center items-center">
                <button onClick={() => scroll('left')} className="text-3xl text-gray-600 hover:text-gray-800">
                <IoIosArrowBack />
                </button>
                <div ref={scrollContainer} className="flex overflow-x-auto space-x-4" style={{ scrollBehavior: 'smooth' }}>
                    {properties.map(property => (
                        <div key={property.id} className="flex-none w-70 rounded-lg shadow-md">
                            <img src={property.imageUrl} alt={property.description} className="w-full h-40 object-cover rounded-t-lg" />
                            <div className="p-4">
                                <p className="text-lg font-semibold">{property.price}</p>
                                <p>{property.address}</p>
                                <p className="text-gray-600">{property.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <button onClick={() => scroll('right')} className="text-3xl text-gray-600 hover:text-gray-800">
                <IoIosArrowForward />
                </button>
            </div>
        </div>
    </div>
);
};

export default RecentlyAdded;