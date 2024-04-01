import React from 'react';

const About = () => {
    return (
        <div
            data-name="about"
            className="w-full md:h-screen bg-gray-900 text-gray-500"
            id="about"
        >
            <div className="max-w-screen-lg py-10 px-5 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                        About Me
                    </p>
                </div>

                <p className="text-lg text-gray-500">
                    I am a dedicated Software Developer with a profound understanding of JavaScript (TypeScript), Java, and a specialization in integrating Blockchain Technology. Over the years, I&apos;ve passionately immersed myself in the dynamic realm of Software Development, focusing on crafting innovative solutions at the intersection of Blockchain and Web Technologies.
                </p>

                <br />

                <p className="text-lg text-gray-500">
                    My journey commenced with a solid understanding of Programming principles, which laid the groundwork for my expertise in Software Development. I have honed my skills in JavaScript (TypeScript), Java, leveraging them to architect robust and scalable applications. Moreover, my deep dive into Blockchain Technology has equipped me to design decentralized solutions, implementing Smart Contracts and exploring the potential of Distributed Ledger Systems.
                </p>

                <br />

                <p className='text-lg text-gray-500'>
                    Beyond technical proficiency, my forte lies in analytical thinking and problem-solving abilities, enabling me to tackle intricate challenges inherent in Software Development. I excel in communicating complex technical concepts effectively, bridging the gap between technical and non-technical stakeholders. My commitment to staying updated with the latest trends drives me to continually explore and adopt new tools and methodologies, ensuring that I remain at the forefront of innovation in Software Development and Blockchain Integration.
                </p>
            </div>

        </div>
    )
}

export default About;
