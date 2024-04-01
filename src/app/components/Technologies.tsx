import React from 'react';

const Technologies = () => {
    const technologies = [
        {
            id: 1,
            category: "Frontend",
            items: [
                { name: "HTML", path: '/html.svg.png' },
                { name: "CSS", path: '/css.svg' },
                { name: "Tailwind CSS", path: '/tailwindcss.png' },
                { name: "JavaScript", path: '/js.png' },
                { name: "TypeScript", path: '/ts.png' },
                { name: "React", path: '/react.png' },
                { name: "Next.js", path: '/nextjs.png' },
            ]
        },
        {
            id: 2,
            category: "Backend",
            items: [
                { name: "Java", path: '/java.png' },
                { name: "Spring Boot", path: '/spring.png' },
                { name: "Express.js", path: '/Expressjs.svg' },
                { name: "MongoDB", path: '/mongo.webp' },
                { name: "MySQL", path: '/mysql.png' },
                { name: "PostgreSQL", path: '/postgres.jpg' },
            ]
        },
        {
            id: 3,
            category: "Blockchain & DevOps",
            items: [
                { name: "Wagmi", path: '/wagmi.png' },
                { name: "Ethers.js", path: '/ethers.png' },
                { name: "Git", path: '/git.png' },
                { name: "MetaMask", path: '/metamask.jpeg' },
                { name: "Docker", path: '/docker.png' },
                { name: "Kubernetes", path: '/k8s.png' }
            ]
        },
    ];

    return (
        <div data-name="technologies"
            className="w-full bg-gray-900 text-gray-500"
            id="technologies">
            <div className="bg-white text-black py-12 md:py-24">
                <div className="max-w-screen-lg mx-auto px-4 md:px-8">
                    <h2 className="text-3xl md:text-4xl font-bold mb-8">Technologies</h2>
                    <p className="text-gray-600 mb-12">Here are the cutting-edge technologies I have worked with:</p>

                    {technologies.map(category => (
                        <div key={category.id} className="mb-10">
                            <h3 className="text-xl md:text-2xl font-semibold mb-5">{category.category} Technologies</h3>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                {category.items.map(item => (
                                    <div key={item.name} className="transform transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer">
                                        <img alt={item.name} src={item.path} className="max-w-full h-auto rounded-lg shadow-md hover:shadow-lg" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Technologies;
