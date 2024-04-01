import React from 'react';

const Experience = () => {
    return (
        <div className="bg-gray-900 text-gray-200 py-12 md:py-24">
            <div className="max-w-screen-lg mx-auto px-4 md:px-8">
                <h2 className="text-3xl md:text-4xl font-bold mb-8">Experience</h2>
                <p className="text-gray-400 mb-12">Discover my journey through the tech realm:</p>

                <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                    <div className='bg-gray-800 rounded-lg overflow-hidden'>
                        <div className="px-6 py-8">
                            <h3 className="text-xl md:text-2xl font-semibold mb-4 text-gray-200">Witty Tech</h3>
                            <p className='text-gray-400 mb-2'>Fullstack Blockchain Integration Engineer</p>
                            <p className='text-gray-400 mb-2'>July 2023 - December 2023</p>
                        </div>
                        <div className="px-6 py-4 bg-gray-700">
                            <p className='text-gray-400 mb-2'>1. Utilized Wagmi and Ethers.js to integrate Smart Contract functions into the frontend using Next.js.</p>
                            <p className='text-gray-400 mb-2'>2. Used Node.js (Express.js) to set up a RESTful API for monitoring users&apos; login and trade activities.</p>
                        </div>
                    </div>

                    <div className='bg-gray-800 rounded-lg overflow-hidden'>
                        <div className="px-6 py-8">
                            <h3 className="text-xl md:text-2xl font-semibold mb-4 text-gray-200">Hackpiy Blockchain Solutions</h3>
                            <p className='text-gray-400 mb-2'>Fullstack Blockchain Integration Engineer</p>
                            <p className='text-gray-400 mb-2'>October 2021 - July 2022</p>
                        </div>
                        <div className="px-6 py-4 bg-gray-700">
                            <p className='text-gray-400 mb-2'>1. Documented various aspects of Blockchain Development, including concepts, architectures, and best practices.</p>
                            <p className='text-gray-400 mb-2'>2. Created clear and concise documentation for Node.js source code, providing instructions for installation, usage, and customization.</p>
                        </div>
                    </div>

                    <div className='bg-gray-800 rounded-lg overflow-hidden'>
                        <div className="px-6 py-8">
                            <h3 className="text-xl md:text-2xl font-semibold mb-4 text-gray-200">Applied Technologies</h3>
                            <p className='text-gray-400 mb-2'>Instructor for JavaScript/TypeScript</p>
                            <p className='text-gray-400 mb-2'>April 2021 - August 2021</p>
                        </div>
                        <div className="px-6 py-4 bg-gray-700">
                            <p className='text-gray-400 mb-2'>1. Taught students fundamentals of Node.js, including setting up development environments, working with modules, and building RESTful APIs.</p>
                            <p className='text-gray-400 mb-2'>2. Educated on TypeScript syntax, strong typing, and integration with JavaScript projects.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experience;
