import React from 'react'
import {Link} from  'react-router-dom';
import {FaSearch} from 'react-icons/fa';
const Header = () => {
  return (
      <header className='bg-slate-200 shadow-md'>
        <div className='flex justify-between items-center max-w-6xl mx-auto p-3'> 
            <Link to='/'>
            <h1 className='font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl flex flex-wrap'>
                <span className='text-slate-700'>conerstone</span>
            </h1>
            </Link>
        <ul className=' gap-5 justify-center hidden sm:flex text-sm md:text-base'>
            <li className='text-slate-700 '>SELLING</li>
            <li className='text-slate-700 '>BUYING</li>
            <li className='text-slate-700 '>LETTING</li>
            <li className='text-slate-700 '>RENTING</li>

        </ul>
        <form className='flex justify-end bg-slate-100 p-3 rounded-lg'>
            <input type='text' placeholder='Location or postcode' className='flex bg-transparent focus:outline-none w-24 sm:w-64 text-xs sm:text-sm md:text-base'/>
            <FaSearch className='text-slate-600 flex'/>
        </form>
        
        </div>
      </header>
    
  )
}

export default Header
