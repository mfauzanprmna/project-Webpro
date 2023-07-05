import React from 'react';
import Carousel from "../template/carousel";


export default function home() {
    return (
        <>
            <Carousel />
            <div className='bg-white'>
                <div className='container mx-auto h-fit flex my-20 marquee relative'>
                    <div className='Poppins-medium flex-auto'>
                        <h1 className='text-black text-opacity-75 md:w-2/3 text-6xl text-start font-bold bg-slate-600 rounded-t-lg shadow-lg'>WELCOME MESSAGE</h1>
                        <p className='text-black border-4 border-t-2 p-3 rounded-tr-lg '>
                            <b> Welcome to our Company Profile web page!</b> <br />
                            We are a company committed to innovation and providing the best services. With our professional and experienced team, we are ready to help you achieve your business goals.
                            Explore our company profile to learn more about our history, vision, mission, values, and the services we offer.
                            Thank you for visiting, and feel free to contact us for further information. <br /><br />
                            Warm regards,<br />
                            The Tiwaibi Company Team
                        </p>
                    </div>
                    <div className='flex-auto'>
                        <img src="http://localhost:3000/LINE_ALBUM_jahim_230628.jpg" alt="" className='w-full ml-5 rounded-lg shadow-lg' />
                    </div>
                </div>
                <div className='container h-fit flex my-20 mx-auto marquee1 relative'>
                <div className='Poppins-medium flex justify-between items-center  '>
                        <div className=''>
                            <img src="http://localhost:3000/Jakun_20230105_115522.jpg" alt="" className='w-full  rounded-lg shadow-lg img_size' />
                        </div>
                    <div className=''>
                        <h1 className='text-black text-opacity-75 text-6xl font-bold bg-slate-600 rounded-t-lg shadow-lg border-r text-end margin-left '>ABOUT US</h1>
                            <p className='text-black border-4 border-t-2 p-3 rounded-tl-lg'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
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