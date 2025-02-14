import React from 'react'
import {Link} from 'react-router-dom';
import img8 from './Images/img8.jpg'
import img10 from './Images/img10.PNG'

export default function Last() {
  return (
    <div className='min-h-screen bg-gradient-to-br from-red-900 via-pink-700 to-blue-300 p-4'>
    <div className="relative text-center mb-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-green-400">
            <span className="">ఎల్లపుడు సుఖ సంతోషాలతో గడపాలని కోరుకుంటూ మరొక్కసారి వివాహ వార్షికోత్సవ శుభాకాంక్షలు</span>
          </h1>
        </div>
    <div className="flex flex-col sm:flex-row items-center gap-10 justify-center"> 
    <img
          src={img10}
          alt="Anniversary"
          className="rounded-lg  shadow-black shadow-lg w-auto h-96 mb-8"
        />  
        <img
          src={img8}
          alt="Anniversary"
          className="rounded-lg shadow-black shadow-lg w-auto h-96 mb-8"
        />
             
      </div>
      
      <Link to="/">
      <div className="flex items-center justify-center"> 
                <button
                  className=" bg-blue-600 text-white py-2 px-6 rounded-full text-xl transition hover:bg-blue-800 bottom-4"
                >
                  మళ్ళీ మొదటికి
                </button>
                </div>
        </Link>

    </div>

  )
}

