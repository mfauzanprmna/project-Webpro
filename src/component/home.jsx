import React from "react";
import Carousel from "../template/carousel";

export default function home() {
    return (
        <>
            <Carousel />
            <div className='xl:container xl:mx-auto px-5 flex flex-wrap-reverse marquee items-center w-full h-[45rem]'>
                <div className='Poppins-medium flex-auto sm:w-[10rem] mr-5'>
                    <h1 className='text-black text-opacity-75 lg:text-6xl text-start font-bold bg-slate-600 rounded-t-lg p-3 text-3xl sm:text-4xl mr-[30%]'>WELCOME MESSAGE</h1>
                    <p className='text-black border-4 border-t-2 p-3 rounded-tr-lg shadow-lg sm:text-lg text-sm'>
                        <b> Welcome to our Company Profile web page!</b> <br />
                        We are a company committed to innovation and providing the best services. With our professional and experienced team, we are ready to help you achieve your business goals.
                        Explore our company profile to learn more about our history, vision, mission, values, and the services we offer.
                        Thank you for visiting, and feel free to contact us for further information. <br /><br />
                        Warm regards,<br />
                        The Tiwaibi Company Team
                    </p>
                </div>
                <div className='flex-auto sm:w-[5rem]'>
                    <img src="http://localhost:3000/LINE_ALBUM_jahim_230628.jpg" alt="" className='md:w-[32rem] rounded-lg shadow-lg mx-auto w-[20rem] max-[640px]:w-[32rem]' />
                </div>
            </div>
            <div className='xl:container xl:mx-auto px-5 flex flex-wrap marquee1 items-center w-full h-[45rem]'>
                <div className='flex-auto sm:w-[5rem] mr-5'>
                    <img src="http://localhost:3000/Jakun_20230105_115522.jpg" alt="" className='md:w-[32rem] rounded-lg shadow-lg mx-auto w-[20rem] max-[640px]:w-[32rem]' />
                </div>
                <div className='Poppins-medium flex-auto sm:w-[10rem]'>
                    <h1 className='text-white text-opacity-75 lg:text-6xl font-bold bg-slate-600 rounded-t-lg border-r text-center ml-[30%] p-3 sm:text-4xl text-3xl'>ABOUT US</h1>
                    <p className='text-black border-4 border-t-2 p-3 rounded-tl-lg shadow-lg'>
                        TIWAIBI — another spelling for the TI-B class — is a company that established in 2022 and has 30 experienced and dedicated staff members to make improvement for the company. This company was built in 2022 with the clearest vision and mission.
                        With a great teamwork, we produce a high-quality products and never dissapoin our costumers.</p>
                </div>
            </div>
        </>
    );
}
