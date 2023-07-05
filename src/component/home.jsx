import React from 'react';
import Carousel from "../template/carousel";


export default function home() {
    return (
        <>
            <Carousel />
            <div className='bg-white'>
                <div className='container mx-auto h-fit flex my-20 marquee relative'>
                    <div className='Poppins-medium flex-auto'>
                        <h1 className='text-black text-opacity-75 md:w-fit text-6xl text-start font-bold bg-slate-600 rounded-t-lg p-3'>WELCOME MESSAGE</h1>
                        <p className='text-black border-4 border-t-2 p-3 rounded-tr-lg shadow-lg'>
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
                    <div className='Poppins-medium flex justify-between items-center'>
                        <div className=''>
                            <img src="http://localhost:3000/Jakun_20230105_115522.jpg" alt="" className='w-full img_size rounded-lg shadow-lg shadow-slate-500' />
                        </div>
                        <div className='ml-5'>
                            <h1 className='text-white text-opacity-75 text-6xl font-bold bg-slate-600 rounded-t-lg border-r text-center margin-left p-3'>ABOUT US</h1>
                            <p className='text-black border-4 border-t-2 p-3 rounded-tl-lg shadow-lg'>
                            TIWAIBI — another spelling for the TI-B class — is a company that established in 2022 and has 30 experienced and dedicated staff members to make improvement for the company. This company was built in 2022 with the clearest vision and mission.
                            With a great teamwork, we produce a high-quality products and never dissapoin our costumers.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}