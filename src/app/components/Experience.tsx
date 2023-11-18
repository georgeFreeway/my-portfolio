import React from 'react';

const Experience = () => {

    return (
        <div
            data-name="experience"
            className="w-full md:h-screen bg-gray-900 text-gray-500"
            id="experience"
        >
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                        Experience
                    </p>
                    <p className="py-6 text-gray-500">Here are my experiences</p>
                </div>

                <div className='flex flex-col md:flex-row justify-evenly gap-10 p-6'>
                    <div className='w-full h-96 bg-gray-200 relative flip-card rounded-lg'>
                        <div className="flip-card-inner rounded-lg cursor-pointer">
                            <div className="flip-card-front bg-gray-100 px-8 py-12">
                                <h1 className="text-gray-900 text-xl font-semibold">Company name:</h1>
                                <p className='text-gray-900 text-xl'>Witty Tech</p>

                                <div className='mt-10'>
                                    <h1 className="text-gray-900 text-xl font-semibold">Position:</h1>
                                    <p className='text-gray-900 text-xl'>Fullstack blockchain Integration Engineer</p>
                                </div>

                                <div className='mt-10'>
                                    <h1 className="text-gray-900 text-xl font-semibold">Date:</h1>
                                    <p className='text-gray-900 text-xl'>July 2022 - Present</p>
                                </div>
                            </div>
                            <div className="flip-card-back bg-gray-100 px-5 py-5">
                                <h1 className="text-gray-900 text-2xl font-semibold">Duties:</h1>
                                <p>1. Utilized the wagmi library and ethers js library to integrate smart contract functions into the frontend using the Next.js framework.</p>

                                <p className='mt-2'>2. Applied Node.js for various backend activities, optimizing workflows that did not directly involve blockchain interactions, showcasing versatility in technology stack utilization.</p>
                            </div>
                        </div>
                    </div>


                    <div className='w-full h-96 bg-gray-200 relative flip-card rounded-lg'>
                        <div className="flip-card-inner rounded-lg cursor-pointer">
                            <div className="flip-card-front bg-gray-100 px-8 py-12">
                                <h1 className="text-gray-900 text-xl font-semibold">Company name:</h1>
                                <p className='text-gray-900'>Hackpiy Blockchain Solutions</p>

                                <div className='mt-10'>
                                    <h1 className="text-gray-900 text-xl font-semibold">Position:</h1>
                                    <p className='text-gray-900 text-xl'>Fullstack blockchain Integration Engineer</p>
                                </div>

                                <div className='mt-10'>
                                    <h1 className="text-gray-900 text-xl font-semibold">Date:</h1>
                                    <p className='text-gray-900 text-xl'>October 2021 - July 2022</p>
                                </div>
                            </div>
                            <div className="flip-card-back bg-gray-100 px-5 py-5">
                                <h1 className="text-gray-900 text-2xl font-semibold">Duties:</h1>
                                <p>1. Documented various aspects of Blockchain Development, including concepts, architectures, and best practices.</p>

                                <p className='mt-2'>2. Created clear and concise documentation for Node.js source code, providing instructions for installation, usage, and customization.</p>
                            </div>
                        </div>
                    </div>

                    <div className='w-full h-96 bg-gray-200 relative flip-card rounded-lg'>
                        <div className="flip-card-inner rounded-lg cursor-pointer">
                            <div className="flip-card-front bg-gray-100 px-8 py-12">
                                <h1 className="text-gray-900 text-xl font-semibold">Company name:</h1>
                                <p className='text-gray-900 text-xl'>Applied Technologies</p>

                                <div className='mt-10'>
                                    <h1 className="text-gray-900 text-xl font-semibold">Position:</h1>
                                    <p className='text-gray-900 text-xl'>Instructor for JavaScript/Typescript</p>
                                </div>

                                <div className='mt-10'>
                                    <h1 className="text-gray-900 text-xl font-semibold">Date:</h1>
                                    <p className='text-gray-900 text-xl'>April 2021 - August 2021</p>
                                </div>
                            </div>
                            <div className="flip-card-back bg-gray-100 px-5 py-5">
                                <h1 className="text-gray-900 text-2xl font-semibold">Duties:</h1>
                                <p>1. Taught students fundamentals of Node.js, including setting up development environments, working with modules, and building RESTful APIs.</p>

                                <p className='mt-2'>2. Educated on TypeScript syntax, strong typing, and integration with JavaScript projects.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Experience;