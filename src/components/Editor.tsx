import React from 'react';

function EditorPick() {
  return (
    <div className="container mx-auto py-12">
      <h2 className="text-3xl font-bold text-center mb-8 text-[#252B42]">EDITORS PICK</h2>
      <p className="text-center mb-12 text-[#737373] mt-[-15px]">Problems trying to resolve the conflict between</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 h-[300px]">
        {/* Men's Clothing */}
        <div className="bg-white  shadow-md p-6">
          <img
            src="/images/Card1.png"
            alt="Mens clothing"
            className="w-full h-200 object-cover  mb-4"
          />
          <button className="bg-white hover:bg-blue-700 text-black  font-bold py-2 px-4 ">
            MEN
          </button>
        </div>

        {/* Women's Clothing */}
        <div className="bg-white  shadow-md p-6">
          <img
            src="/images/Card2.png"
            alt="Womens clothing"
            className="w-full h-60 object-cover  mb-4"
          />
          <button className="bg-white hover:bg-blue-700 text-black  font-bold py-2 px-4 ">
            WOMEN
          </button>
        </div>

        {/* Accessories */}
        <div className="bg-white shadow-md p-6">
          <img
            src="/images/Card3.png"
            alt="Accessories"
            className="w-full h-200 object-cover mb-4"
          />
          <button className="bg-white hover:bg-blue-700 text-black font-bold py-2 px-4 ">
            ACCESSORIES
          </button>
        </div>

        {/* Kids' Clothing */}
        <div className="bg-white  shadow-md p-6">
          <img
            src="/images/Card4.png"
            alt="Kids clothing"
            className="w-full h-200object-cover  mb-4"
          />
          <button className="bg-white hover:bg-blue-700 text-black  font-bold py-2 px-4 ">
            KIDS
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditorPick;

