import React from 'react';
import Carousel from "../template/carousel";


export default function home() {
    return (
        <>
            <Carousel />
            <div className='bg-white'>
                <div className='container mx-auto h-fit flex my-20 marquee relative'>
                    <div className='Poppins-medium flex-auto'>
                        <h1 className='text-black text-opacity-75 text-6xl text-start'>WELCOME MESSAGE</h1>
                        <p className='text-black'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                    </div>
                    <div className='flex-auto'>
                        <img src="http://localhost:3000/LINE_ALBUM_jahim_230628.jpg" alt="" className='w-full' />
                    </div>
                </div>
                <div className='container mx-auto marquee1'>
                    <div className=''>
                        <h1 className='text-black text-opacity-75 text-6xl text-end'>ABOUT US</h1>
                        <div className='Poppins-medium '>
                            <p className='text-left text-black'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                Excepteur sint occaecat cupidatat Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}