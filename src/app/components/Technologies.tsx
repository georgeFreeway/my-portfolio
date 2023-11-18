import React from 'react';

const Technologies = () => {
    const education = [
        {
            id: 1,
            path: '/html.svg.png'
        },
        {
            id: 2,
            path: '/css.svg'
        },
        {
            id: 3,
            path: '/tailwindcss.png'
        },
        {
            id: 4,
            path: '/js.png'
        },
        {
            id: 5,
            path: '/ts.png'
        },
        {
            id: 6,
            path: '/react.png'
        },
        {
            id: 7,
            path: '/nextjs.png'
        },
        {
            id: 8,
            path: '/rn.png'
        },
        {
            id: 9,
            path: '/Expressjs.svg'
        },
        {
            id: 10,
            path: '/mongo.webp'
        },
        {
            id: 11,
            path: '/mysql.png'
        },
        {
            id: 12,
            path: '/wagmi.png'
        },
        {
            id: 13,
            path: '/ethers.png'
        },
        {
            id: 14,
            path: '/git.png'
        },
        {
            id: 15,
            path: '/metamask.jpeg'
        },

    ]
    return (
        <div
            data-name="technologies"
            className="w-full py-32 md:h-screen bg-white text-black"
            id="technologies"
        >
            <div className="max-w-screen-lg mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8 px-5">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                        Technologies
                    </p>
                    <p className="py-6 text-gray-500">Here are the cutting edge technologies I have worked with</p>
                </div>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-5 sm:px-0 overflow-x-auto h-80">
                    {education.map((items) => (
                        <div key={items.id} className="shadow-md shadow-gray-600 rounded-lg p-4 hover:scale-105 duration-500">
                            <div className="">
                                <img alt='tech-logos' src={items.path}/>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Technologies;
