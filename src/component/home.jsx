import React from 'react';
import Carousel from "../template/carousel";

export default function home() {
    return (
        <>
            <Carousel />
        
            <div className='bg-white'>
                <br /><br /><p className='text-black text-opacity-75 text-6xl text-start'>WELCOME MESSAGE</p>
                <div className='Poppins-medium '>
                <p className='text-left text-black '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                
                    <div className="border-r-4 w-200 h-500 bg-blue-800 border border-black rounded-md border-spacing-3 ">
                        <img src="" alt="" />
                    </div>
                </div>
                <br /><br /><br /><br /><br /><br /><p>TIWAIBI CLASS</p>
            </div>
        </>
    );
}