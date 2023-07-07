import React from 'react';

export default function contact() {
  return (
    <div className='bg-slate-500 flex justify-center h-screen'>
      <div className='Poppins-medium'>
        <h1 className='text-white text-6xl mt-10 p-5 text-center'>CONTACT US</h1>
        <p className='text-white text-center'>We always hear you, left a message for us!</p>
        <div className='container border-white '>
          <form action="" className='bg-gray-300 w-full rounded-lg shadow-lg relative content-center'>
            <div class="mx-3 mb-6">
              <div class="w-full px-3 mb-6 md:mb-0 p-5 m-5 flex flex-row gap-4">
                <div className="">
                  <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="name">
                    Name
                  </label>
                  <input class="appearance-none block w-full bg-gray-200 text-gray-700 border
                 border-black rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="name" type="text" placeholder="Name"></input>
                  <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="Address">
                    Address
                  </label>
                  <input class="appearance-none block w-full bg-gray-200 text-gray-700 border
                 border-black rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="Address" type="text" placeholder="Address"></input>
                </div>
                <div class="">
                  <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="email">
                    E-mail
                  </label>
                  <input class="appearance-none block w-full bg-gray-200 text-gray-700 border
                 border-black rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="email" type="text" placeholder="E-mail"></input>
                  <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="Phone">
                    Phone Number
                  </label>
                  <input class="appearance-none block w-full bg-gray-200 text-gray-700 border
                 border-black rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="Phone" type="text" placeholder="Phone Number"></input>
                </div>
              </div>
              <div className="w-auto px-3 mb-6 md:mb-0 py-5 m-5">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="Message">
                  Message
                </label>
                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border
                 border-black rounded py-10 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="Message" type="text" placeholder="Enter your message"></input>
              </div>
            </div>
          </form>
        </div >
        <div className='py-10'>
          <hr />
          <p className='text-white text-center'>Jl. Prof. DR. G.A. Siwabessy, Kota Depok, Jawa Barat 16425</p>
          <p className='text-white text-center'>tiwaibi@class.com</p>
          <p className='text-white text-center'>08123456789</p>
      </div>
      </div >
    </div >
  );
}