import React from 'react';

const About = () => {
    return (
        <div
            data-name="about"
            className="w-full md:h-screen bg-gray-900 text-gray-500"
            id="about"
        >
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                        About Me
                    </p>
                </div>

                <p className="text-lg text-gray-500">
                    I am a dedicated Full Stack Engineer with a profound understanding of JavaScript, Node.js, TypeScript, and a specialization in integrating blockchain technology. Over the years, I&apos;ve passionately immersed myself in the dynamic realm of software development, focusing on crafting innovative solutions at the intersection of blockchain and web technologies.
                </p>

                <br />

                <p className="text-lg text-gray-500">
                    My journey commenced with a solid understanding of programming principles, which laid the groundwork for my expertise in full stack development. I have honed my skills in JavaScript, Node.js, and TypeScript, leveraging them to architect robust and scalable applications. Moreover, my deep dive into blockchain technology has equipped me to design decentralized solutions, implementing smart contracts and exploring the potential of distributed ledger systems.
                </p>

                <br />

                <p className='text-lg text-gray-500'>
                    Beyond technical proficiency, my forte lies in analytical thinking and problem-solving abilities, enabling me to tackle intricate challenges inherent in software development. I excel in communicating complex technical concepts effectively, bridging the gap between technical and non-technical stakeholders. My commitment to staying updated with the latest trends drives me to continually explore and adopt new tools and methodologies, ensuring that I remain at the forefront of innovation in full stack development and blockchain integration.
                </p>
            </div>

        </div>
    )
}

export default About;
