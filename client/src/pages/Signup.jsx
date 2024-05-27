import React, { useState } from 'react';
import {set} from 'mongoose';
import {useNavigate,Link} from 'react-router-dom';
const Signup = () => {
  const[error,setError]=useState(null);
  const [formData, setFormData]=useState({});
  const [loading,setLoading] =useState(false);
  const navigate=useNavigate();

  const handleChange=(e)=>{
   setFormData({...formData,[e.target.id]: e.target.value});
   console.log(formData);
  };
  const handleSubmit=async(e)=>{
    e.preventDefault();
    try {
      setLoading(true);
      const res= await fetch('/server/auth/signup',{
        method:'POST',
        headers:{
          'Content-Type':'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data=await res.json();
      console.log(data);
      if(data.succuess==false){
        setLoading(false);
        setError(data.message);
        return;
        
      };
      setLoading(false);
      setError(null);
      navigate('/sign-in');
    } catch (error) {
      setLoading(false);
      setError(data.message);
    }
    
  };

  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>Sign Up</h1>
        <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
        <input type='text' placeholder='Username' className='border p-3 rounded-lg' id='username' onChange={handleChange}/> 
        <input type='password' placeholder='Password' className='border p-3 rounded-lg' id='password' onChange={handleChange}/> 
        <button className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 '> 
          {loading ? 'Loading...': 'Sign Up'}
        </button>
        </form>

        <div className='flex gap-2 mt-5'>
          <p>Have an account?</p>
          <Link to={'/sign-in'}>
          <span className='text-blue-700'>Sign In</span>
          </Link>
        </div>
        {error && <p className='text-red-500'>{error}</p>}
      
    </div>
  )
}

export default Signup
