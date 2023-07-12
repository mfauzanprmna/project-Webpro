import React from "react";
import Carousel from "../template/carousel";

export default function home() {
    let domain = window.location.hostname;

    if (domain === 'localhost') {
        domain = 'localhost:3000';
    }
    return (
        <>
            <Carousel />
            <div className='xl:container xl:mx-auto px-5 flex flex-wrap-reverse marquee items-center w-full h-[45rem]'>
                <div className='Poppins-medium flex-auto sm:w-[10rem] mr-5'>
                    <h1 className='text-black text-opacity-75 lg:text-6xl text-start font-bold bg-slate-600 rounded-t-lg p-3 text-3xl sm:text-4xl mr-[40%]'>WELCOME MESSAGE</h1>
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
                    <img src={`http://${domain}/LINE_ALBUM_jahim_230628.jpg`} alt="" className='md:w-[32rem] rounded-lg shadow-lg mx-auto w-[20rem] max-[640px]:w-[32rem]' />
                </div>
            </div>
            <div className='xl:container xl:mx-auto px-5 flex flex-wrap marquee1 items-center w-full h-[45rem]'>
                <div className='flex-auto sm:w-[5rem] mr-5'>
                    <img src={`http://${domain}/Jakun_20230105_115522.jpg`} alt="" className='md:w-[32rem] rounded-lg shadow-lg mx-auto w-[20rem] max-[640px]:w-[32rem]' />
                </div>
                <div className='Poppins-medium flex-auto sm:w-[10rem]'>
                    <h1 className='text-white text-opacity-75 lg:text-6xl font-bold bg-slate-600 rounded-t-lg border-r text-center ml-[40%] p-3 sm:text-4xl text-3xl'>ABOUT US</h1>
                    <p className='text-black border-4 border-t-2 p-3 rounded-tl-lg shadow-lg'>
                        TIWAIBI — another spelling for the TI-B class — is a company that established in 2022 and has 30 experienced and dedicated staff members to make improvement for the company. This company was built in 2022 with the clearest vision and mission.
                        With a great teamwork, we produce a high-quality products and never dissapoin our costumers.</p>
                </div>
            </div>
            <div className='xl:container xl:mx-auto px-5 flex flex-wrap-reverse marquee items-center w-full h-[45rem]'>
                <div className='Poppins-medium flex-auto sm:w-[10rem] mr-5'>
                    <h1 className='text-black text-opacity-75 lg:text-6xl text-center font-bold bg-slate-600 rounded-t-lg p-3 text-3xl sm:text-4xl mr-[0%]'>VISI</h1>
                    <p className='text-black border-4 border-t-2 px-5 py-20 h-96 shadow-lg sm:text-lg text-sm'>
                        <b>Our vision</b> <br />
                        To become a leading company in providing innovative and high-quality solutions that empower businesses and global communities. We aim to be internationally recognized as an industry leader, inspiring positive change, and driving sustainable transformation across various sectors.
                    </p>
                </div>
                <div className='Poppins-medium flex-auto sm:w-[10rem] mr-5'>
                    <h1 className='text-black text-opacity-75 lg:text-6xl text-center font-bold bg-slate-600 rounded-t-lg p-3 text-3xl sm:text-4xl ml-[0%]'>MISI</h1>
                    <p className='text-black border-4 border-t-2 p-5 h-96 shadow-lg sm:text-lg text-sm'>
                        <b> Our mission</b> <br />
                        <li>Delivering the best solutions: We are committed to providing the best and innovative solutions to our customers</li>
                        <li>Strong collaboration: We believe in mutually beneficial collaboration with customers, partners, and other stakeholders.</li>
                        <li>Quality and excellence: We are dedicated to delivering exceptional quality in every aspect of our business.</li>
                        <li>Human resource development: We value and invest in the development of our team. </li>
                    </p>
                </div>
            </div>

        </>
    );
}
