import React from 'react'
import {Link} from 'react-router-dom';
import img2 from './Images/img2.jpeg'
import img3 from './Images/img3.JPG'

export default function Second() {
  return (
    <div className='min-h-screen bg-gradient-to-br from-green-900 via-pink-600 to-green-300 p-4'>
    <div className="relative text-center mb-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-green-600">
            <span className="">వారి జీవితంలో శ్వేతమ్మ వచ్చింది</span>
          </h1>
        </div>
    <div className="flex flex-col sm:flex-row items-center gap-10 justify-center">  
        <img
          src={img2}
          alt="Anniversary"
          className="rounded-lg shadow-black shadow-lg w-80 h-auto mb-8"
        />
        <img
          src={img3}
          alt="Anniversary"
          className="rounded-lg  shadow-black shadow-lg w-96 h-96 mb-8"
        />     
      </div>
      
      <Link to="/third">
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

