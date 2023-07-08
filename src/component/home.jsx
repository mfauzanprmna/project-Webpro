import React from "react";
import Carousel from "../template/carousel";

export default function home() {
    return (
        <>
            <Carousel />
            <div className="container mx-auto px-10 h-screen flex flex-wrap-reverse justify-content-center items-center marquee relative">
                <div className="Poppins-medium flex-auto min-[766px]:w-24 mr-5 max-[765px]:mt-2">
                    <h1 className="text-black text-opacity-75 md:w-2/3 text-6xl text-start font-bold bg-slate-600 rounded-t-lg shadow-lg">
                        WELCOME MESSAGE
                    </h1>
                    <p className="text-black border-4 border-t-2 p-3 rounded-tr-lg ">
                        <b> Welcome to our Company Profile web page!</b> <br />
                        We are a company committed to innovation and providing the best
                        services. With our professional and experienced team, we are ready
                        to help you achieve your business goals. Explore our company profile
                        to learn more about our history, vision, mission, values, and the
                        services we offer. Thank you for visiting, and feel free to contact
                        us for further information. <br />
                        <br />
                        Warm regards,
                        <br />
                        The Tiwaibi Company Team
                    </p>
                </div>
                <div className="flex-auto min-[766px]:w-10 flex">
                    <img
                        src="http://localhost:3000/LINE_ALBUM_jahim_230628.jpg"
                        alt=""
                        className="rounded-lg shadow-lg max-[765px]:w-96 mx-auto"
                    />
                </div>
            </div>
            <div className="container mx-auto px-10 h-screen flex flex-wrap justify-content-center items-center marquee1 relative">
                <div className="flex-auto min-[766px]:w-10 flex mr-5">
                    <img
                        src="http://localhost:3000/Jakun_20230105_115522.jpg"
                        alt=""
                        className="rounded-lg shadow-lg max-[765px]:w-96 mx-auto"
                    />
                </div>
                <div className="Poppins-medium flex-auto min-[766px]:w-24">
                    <h1 className="text-black text-opacity-75 md:w-2/3 text-6xl text-start font-bold bg-slate-600 rounded-t-lg shadow-lg">
                        ABOUT US
                    </h1>
                    <p className="text-black border-4 border-t-2 p-3 rounded-tl-lg">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                        irure dolor in reprehenderit in voluptate velit esse cillum dolore
                        eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat Ut
                        enim ad minim veniam, quis nostrud exercitation ullamco laboris
                        nisi ut aliquip ex ea commodo consequat.
                    </p>
                </div>
            </div>
        </>
    );
}
