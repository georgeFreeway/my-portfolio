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
                    I am a passionate and detail-oriented professional seeking a challenging position in Software Development. Leveraging my strong technical skills in Go and Node.js, along with extensive experience in microservices architecture, I am dedicated to pushing the boundaries of innovation in this field. I specialize in building production-ready applications, focusing on seamless communication between services.
                </p>

                <br />

                <p className="text-lg text-gray-500">
                    My journey in software development began with a solid understanding of programming principles, which laid the foundation for my expertise in Go and Node.js. I have honed my skills in designing and implementing robust and scalable microservices, embracing containerization with Docker.
                </p>

                <br />

                <p className='text-lg text-gray-500'>
                    Beyond my technical proficiency, I excel in analytical thinking and problem-solving, enabling me to tackle complex challenges inherent in software development. I communicate complex technical concepts effectively, bridging the gap between technical and non-technical stakeholders. My commitment to staying updated with the latest trends drives me to continually explore and adopt new tools and methodologies, ensuring that I remain at the forefront of innovation in Software Development and Microservices Architecture.
                </p>
            </div>

        </div>
    )
}

export default About;
