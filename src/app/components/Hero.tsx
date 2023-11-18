'use client'
import React from 'react'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import {Link} from 'react-scroll';

const Hero = () => {
    return (
        <div
            data-name="home"
            className="py-32 w-full bg-white"
            id="home"
        >
            <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
                <div className="flex flex-col justify-center h-full">
                    <h2 className="text-4xl sm:text-7xl font-bold text-black ">
                        Fullstack Software <br/> Developer
                    </h2>
                    <p className="text-gray-500 py-4 max-w-md">
                        I am a passionate and detail-oriented professional seeking a challenging position in the field of Fullstack Software Development. Leveraging my strong technical skills, experience with JavaScript, Typescript, and a proven track record in building production-ready web and mobile applications, I am dedicated to pushing the boundaries of innovation in Fullstack Software Development.
                    </p>

                    <div className="mb-5">
                        <Link
                            to="experience"
                            smooth
                            duration={500}
                            className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
                        >
                            My Portfolio
                            <span className="group-hover:rotate-90 duration-300">
                                <MdOutlineKeyboardArrowRight size={30} className="ml-1" />
                            </span>
                        </Link>
                    </div>
                </div>

                <div>
                    <img
                        src='https://res.cloudinary.com/ds1ll9kkv/image/upload/v1700302891/PHOTO-2023-11-18-10-45-52_hft3de.jpg'
                        alt="george"
                        className="rounded-2xl mx-auto w2/3 md:w-96"
                    />
                </div>
            </div>
        </div>
    )
}

export default Hero
