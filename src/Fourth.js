import React from 'react'
import {Link} from 'react-router-dom';
import img6 from './Images/img6.PNG'
import img7 from './Images/img7.jpg'
import img9 from './Images/img9.jpg'

export default function Fourth() {
  return (
    <div className='min-h-screen bg-gradient-to-br from-green-900  to-blue-300 p-4'>
    <div className="relative text-center mb-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-pink-400">
            <span className="">కుటుంబంతో</span>
          </h1>
        </div>
    <div className="flex flex-col sm:flex-row items-center gap-10 justify-center">  
        <img
          src={img6}
          alt="Anniversary"
          className="rounded-lg shadow-black shadow-lg w-auto h-96 mb-8"
        />
        <img
          src={img7}
          alt="Anniversary"
          className="rounded-lg  shadow-black shadow-lg w-auto h-96 mb-8"
        />  
        <img
          src={img9}
          alt="Anniversary"
          className="rounded-lg  shadow-black shadow-lg w-auto h-96 mb-8"
        />     
      </div>
      
      <Link to="/fifth">
      <div className="flex items-center justify-center"> 
                <button
                  className=" bg-blue-600 text-white py-2 px-6 rounded-full text-xl transition hover:bg-blue-800 bottom-4"
                >
                  కొనసాగుదామా
                </button>
                </div>
        </Link>

    </div>

  )
}

