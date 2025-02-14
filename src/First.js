import React from 'react';
import { Link} from 'react-router-dom';
import mainImage from './Images/main.jpeg'

function First() {
  return (
    
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-pink-900 via-green-600 to-pink-300 p-4">
        <div className="relative text-center mb-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-blue-600">
            <span className="">Happy </span>
            <span className="">24th Marriage Anniversary</span>
          </h1>
        </div>

        <img
          src={mainImage}
          alt="Anniversary"
          className="rounded-lg shadow-black shadow-xl max-w-full h-auto mb-8"
        />

        <Link to="/second">
          <button
            className="justify-center bg-blue-600 text-white py-2 px-6 rounded-full text-xl transition hover:bg-blue-800 bottom-4"
          >
            ఇక మొదలెడదామ
          </button>
        </Link>
      </div>
  );
}


export default First;
