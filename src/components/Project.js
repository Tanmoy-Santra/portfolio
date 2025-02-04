import React from 'react';
import Navbar1 from './Navbar1';
import { Button } from 'react-bootstrap';
import Buttompart from './Buttompart';

export default function Project() {
    const projects = [
        {
            id: 1,
            title: 'Basic Calculator',
            description: 'Here you can calculate basic problems like addition, subtraction, multiplication, division, and percentage. I used HTML, CSS, and JS for this Calculator App.',
            img: './calculator.png',
            demoLink: 'https://my-basic-calcu-lator.netlify.app/',
            githubLink: '',  // No GitHub link for this project
            animationDelay: '1s',
        },
        {
            id: 2,
            title: 'Weather App',
            description: 'This Weather App shows weather details of a particular city. It was built using HTML, CSS, JS, and the Weather API.',
            img: './weatherApp.png',
            demoLink: 'https://basicweather-app.netlify.app/',
            githubLink: '',  // No GitHub link for this project
            animationDelay: '2s',
        },
        {
            id: 3,
            title: 'Restaurant Website',
            description: 'This is a basic Restaurant website where you can order food, using HTML, CSS & JS.',
            img: './bhoj2.png',
            demoLink: 'https://bhoj-restaurant.netlify.app/',
            githubLink: 'https://github.com/Tanmoy-Santra/Bhoj-Restaurant.git',  // GitHub link added
            animationDelay: '3s',
        },
        {
            id: 4,
            title: 'Notes Management App',
            description: 'This is a Notes Management App, where users can create, edit, delete, and share their notes. It uses React, MongoDB, Firebase for storage, and JWT for authentication.',
            img: './notesApp.png',
            demoLink: 'https://notes-management-app-drqo.vercel.app/',
            githubLink: 'https://github.com/Tanmoy-Santra/Notes-Management-App',  // GitHub link added
            animationDelay: '4s',
        },
        {
            id: 5,
            title: 'CryptoPlace App',
            description: 'CryptoPlace App lets you track real-time cryptocurrency prices and trends. Built with React and integrated with APIs to fetch live data.',
            img: './cryptoApp.png',
            demoLink: 'https://cryptoplace-tmwt.vercel.app/',
            githubLink: 'https://github.com/Tanmoy-Santra/cryptoplace',  // GitHub link added
            animationDelay: '5s',
        },
        {
            id: 6,
            title: 'Dhun Music App',
            description: 'Dhun Music App allows users to listen to music, create playlists, and discover new tracks. Built using React, Node.js, and MongoDB.',
            img: './dhunMusic.png',
            demoLink: 'https://dhunmusicapp.web.app/',
            githubLink: 'https://github.com/Tanmoy-Santra/dhunmain',  // GitHub link added
            animationDelay: '6s',
        },
        {
            id: 7,
            title: 'GitHub Profile Viewer',
            description: 'This app lets you view a GitHub profile and their details like repos, followers, and more. Built with React and the GitHub API.',
            img: './githubprofile.png',
            demoLink: 'https://githubprofileviewer.netlify.app/',
            githubLink: 'https://github.com/Tanmoy-Santra/GitHub-Profile-Viewer',  // GitHub link added
            animationDelay: '7s',
        },
    ];

    return (
        <div>
            <div className='sticky-top'>
                <Navbar1 />
            </div>
            <div className='container custom-container my-5 py-5'>
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 text-center">
                    {projects.map(project => (
                        <div className={`col animate__animated animate__fadeIn animate__delay-${project.animationDelay}`} key={project.id}>
                            <div className="card h-100 bg-transparent shadow-lg hover:shadow-xl transition-all duration-300">
                                <img src={project.img} className="card-img-top" alt={project.title} />
                                <div className="card-body">
                                    <h3 className="card-title text-light text-center project-title">{project.title}</h3>
                                    <p className="card-text text-size-custom text-light">{project.description}</p>
                                </div>
                                <div className="card-footer text-center">
                                    <Button href={project.demoLink} variant="info" className='mx-2' target="_blank" rel="noopener noreferrer">
                                        <i className="fa fa-eye" aria-hidden="true"></i>&nbsp;Demo
                                    </Button>
                                    {project.githubLink && (
                                        <Button href={project.githubLink} variant="info" className='mx-2' target="_blank" rel="noopener noreferrer">
                                            <i className="fab fa-github"></i>&nbsp;Github
                                        </Button>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Buttompart />
        </div>
    );
}
