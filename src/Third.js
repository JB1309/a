import React from 'react'
import {Link} from 'react-router-dom';
import img4 from './Images/img4.JPG'
import img5 from './Images/img5.JPG'

export default function Third() {
  return (
    <div className='min-h-screen bg-gradient-to-br from-blue-900 to-green-300 p-4'>
    <div className="relative text-center mb-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white">
            <span className="">జీవితంలో ఒక్కో మెట్టు ఎదుగుతూ </span>
          </h1>
        </div>
    <div className="flex flex-col sm:flex-row items-center gap-10 justify-center">  
        <img
          src={img4}
          alt="Anniversary"
          className="rounded-lg shadow-black shadow-lg w-80 h-96 mb-8"
        />
        <img
          src={img5}
          alt="Anniversary"
          className="rounded-lg  shadow-black shadow-lg w-64 h-96 mb-8"
        />     
      </div>
      
      <Link to="/fourth">
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

