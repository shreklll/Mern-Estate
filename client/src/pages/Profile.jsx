import React from 'react'
import { useSelector } from 'react-redux'

const Profile = () => {
  const currentUser=useSelector((state)=>state.user);

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-center text-2xl text-blue-800 font-bold mb-6">My Profile</h2>
        <form >
          <lable className="block text-sm font-bold mb-2">Username</lable>
          <input 
            type='text' 
            id='username'
            defaultValue={currentUser.username}
            onChange={handleChange}
            className='block w-full p-2 border border-gray-300 rounded-lg'/>
          <lable className="block text-sm font-bold mb-2">Update Password</lable>
          <input 
            type='text' 
            id='password'
            onChange={handleChange}
            className='block w-full p-2 border border-gray-300 rounded-lg'></input>
            {/* <section className="mb-8">
                <h3 className="text-blue-800 border-b-2 border-blue-800 pb-1 mb-4 font-bold">Information</h3> */}
                
                {/* <div className="mb-6">
                    <label htmlFor="title" className="block text-sm font-bold mb-2">Title:</label>
                    <select
                        name="title"
                        id="title"
                        value={profile.title}
                        onChange={handleChange}
                        className="block w-full p-2 border border-gray-300 rounded-lg"
                    >
                        <option value="Miss">Miss</option>
                        <option value="Ms">Ms</option>
                        <option value="Mrs">Mrs</option>
                        <option value="Mr">Mr</option>
                        <option value="Dr">Dr</option>
                    </select>
                </div> */}

                {/* <div className="mb-6">
                    <label htmlFor="name" className="block text-sm font-bold mb-2">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={profile.name}
                        onChange={handleChange}
                        className="block w-full p-2 border border-gray-300 rounded-lg"
                    />
                </div> */}

                {/* <div className="mb-6">
                    <label htmlFor="companyName" className="block text-sm font-bold mb-2">Company Name:</label>
                    <input
                        type="text"
                        id="companyName"
                        name="companyName"
                        value={profile.companyName}
                        onChange={handleChange}
                        className="block w-full p-2 border border-gray-300 rounded-lg"
                    />
                </div> */}

                {/* <div className="mb-6">
                    <label htmlFor="primaryPhone" className="block text-sm font-bold mb-2">Primary Telephone Number:</label>
                    <input
                        type="text"
                        id="primaryPhone"
                        name="primaryPhone"
                        value={profile.primaryPhone}
                        onChange={handleChange}
                        className="block w-full p-2 border border-gray-300 rounded-lg"
                    />
                </div> */}

                

                {/* <div className="mb-6">
                    <label htmlFor="email" className="block text-sm font-bold mb-2">Email Address:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={profile.email}
                        onChange={handleChange}
                        className="block w-full p-2 border border-gray-300 rounded-lg"
                    />
                </div> */}
            {/* </section> */}
            {/* <section className="mb-8">
                    <h3 className="text-blue-800 border-b-2 border-blue-800 pb-1 mb-4 font-bold">About me, your Yopa agent</h3>
                    <div className="mb-6">
                        <textarea
                            name="about"
                            id="about"
                            rows="5"
                            value={profile.about}
                            onChange={handleChange}
                            className="block w-full p-2 border border-gray-300 rounded-lg resize-none"
                        ></textarea>
                    </div>
                </section> */}

                <button type="submit" className="bg-blue-800 text-white py-2 px-4 rounded-lg hover:bg-blue-700">
                    Update 
                </button>
            </form>
        
        </div>
    );
};

      

export default Profile
