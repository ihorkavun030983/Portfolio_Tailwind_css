import React from 'react'
import TravelAgency from '../assets/Travel_Agency.png'
import Hlegal from '../assets/hlegal.png'
import Construct from '../assets/Construct.png'

const projects = [
    {
        id: 1,
        name: "Travel Agency",
        technologies: "MERN Stack",
        image: TravelAgency,
        github: "https://github.com/ihorkavun030983/TravelAgency_for_tailwindcss.git",
    },
    {
        id: 2,
        name: "Final Project",
        technologies: "HTML/CSS",
        image: Hlegal,
        github: "https://github.com/ihorkavun030983/Final-home-work.git",
    },
    {
        id: 3,
        name: "Construct",
        technologies: "MERN Stack",
        image: Construct,
        github: "https://github.com/ihorkavun030983/Konstruct.git",
    }
]

const Projects = () => {
  return (
    <div className="bg-black text-white py-20" id="projects">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map(project => (
                <div key={project.id} className='bg-gray-800 p-6 rounded-lg hover:shadow-lg transform
                 transition-transform duration-300 hover:scale-105'>
                    <img src={project.image} alt="" className='rounded-lg mb-4 w-full h-48 object-cover'/>
                    <h3 className='text-2px font-bold mb-2'>{project.name}</h3>
                    <p className='text-gray-400 mb-4'>{project.technologies}</p>
                    <a href={project.github} className='inline-block bg-gradient-to-r from-green-400
                     to-blue-500 taxt-white px-4 py-2 rounded-full' target='_blank' rel='noopener noreferrer'>GitHub</a>
                </div>
            ))}

    </div>
    </div>
    </div>
  )
}

export default Projects
