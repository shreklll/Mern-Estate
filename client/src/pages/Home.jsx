import React from 'react';
import inside from '../assets/inside.avif';
import savemoney from '../assets/savemoney.png';
import trend from '../assets/trend.png';
import experts from '../assets/experts.png';
import RecentlyAdded from '../components/RecentlyAdded.jsx';
import externallogos from '../assets/externallogos.png';


const Home = () => {
  return (
    <div>
    <div 
      className="relative bg-cover bg-center h-[60vh]"
      style={{ backgroundImage: `url(${inside})` }}
    >
      <div className="absolute inset-0 bg-gray-400 bg-opacity-75 flex flex-col items-center justify-center p-4">
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-2">
          We are here to help
        </h1>
        <h3 className='text-white text-center text-l md:text-xl lg:text-2xl mb-3'>
          Find your next perfect home to buy or rent
        </h3>
        <div className="w-full max-w-lg mx-auto flex items-center space-x-2">
          <input
            type="text"
            placeholder="Area or Postcode"
            className="flex-grow px-4 py-2 border border-gray-300 rounded-md"
          />
          <button
            className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-md font-medium"
          >
            For Sale
          </button>
          <button
            className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-md font-medium"
          >
            To Rent
          </button>
        </div>
      </div>
    </div>
    {/* Book valuation, viewing instruction Section */}
    <section>
    <div className="container mx-auto px-4 py-8">
    <div className="flex justify-around items-stretch space-x-4">
        {/* First Card */}
        < div className="flex-1 bg-white rounded-lg shadow p-6 text-center space-y-4">
            <h2 className="text-2xl font-bold mb-2">Arrange your valuation</h2>
            <p className="mb-4">We are committed to provide excellent service, so we can visit your property at a time that suits you.</p>
            <button className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600">Book my appointment</button>
          
        </div>
         {/* Second Card */}
         <div className="flex-1 bg-gray-500 text-white  rounded-lg shadow p-6 text-center space-y-4">
            <h2 className="text-2xl font-bold mb-2">Book your viewing</h2>
            <p className="mb-4">Look for a new place? Why not have a look in person!</p><br/>
            <button className="bg-white text-gray-800 px-4 py-2 mb-2 rounded hover:bg-gray-300">Book my appointment</button>
          </div>
        

        {/* Third Card */}
        < div className="flex-1 bg-gray-800 text-white rounded-lg shadow p-6 text-center space-y-4">
            <h2 className="text-2xl font-bold mb-2">I'm ready to instruct</h2>
            <p className="mb-4">Get your home on the market in the fastest possible way.</p><br/>
            <button className="bg-white text-gray-800 px-4 py-2 rounded hover:bg-gray-500"> Instruct us now </button>
          </div>
        
      </div>
    </div>
    </section>





     {/* Why Choose Section */}
      <section className="bg-purple-100 py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl md:text-4xl font-bold text-black mb-8">Why choose Corner Stone?</h2>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-8">
            <div className="flex flex-col items-center max-w-sm p-4">
              <img src={savemoney} alt="Save money" className="h-25 mb-4" />
              <h3 className="text-xl font-semibold text-purple-900 mb-2">Save money</h3>
              <p className="text-gray-700 mb-4">Placeholder...................................</p>
              <button
            className="bg-purple-900 hover:bg-gray-700 text-white font-medium px-4 py-2"
          >
            Check our price list
          </button>
            </div>
            <div className="flex flex-col items-center max-w-sm p-4">
              <img src={trend} alt="Sell faster" className="h-25 mb-4" />
              <h3 className="text-xl font-semibold text-purple-900 mb-2">Sell faster</h3>
              <p className="text-gray-700 mb-4">Placeholder...................................</p>
              <button
            className="bg-purple-900 hover:bg-gray-700 text-white font-medium px-4 py-2"
          >
            How we work
          </button>
            </div>
            <div className="flex flex-col items-center max-w-sm p-4">
              <img src={experts} alt="See more" className="h-25 mb-4" />
              <h3 className="text-xl font-semibold text-purple-900 mb-2">Professional</h3>
              <p className="text-gray-700 mb-4">Placeholder...................................</p>
              <button
            className="bg-purple-900 hover:bg-gray-700 text-white font-medium px-4 py-2"
          >
            Talk to an expert
          </button>
            </div>
          </div>
        </div>
      </section>
    <RecentlyAdded />
    <div className='flex items-center justify-center my-2 mb-4'>
    <img src={externallogos} alt='' className=''/>
    </div>
    </div>
  );
};


export default Home;
