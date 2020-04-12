import React from 'react';
import '../css/projects.css';
import Card from './Card';
import pcard from '../images/animal_card.jpg';
import pmemory from '../images/memory_game.jpg';
import pjasmine from '../images/jasmine.jpg';
import pcharacter from '../images/character.jpg';
import parcade from '../images/arcade.jpg';
import prestaurant from '../images/restaurant.jpg';
import padd from '../images/add.jpg';
import pmovie from '../images/movie.jpg';
import pcoffee from '../images/coffee.jpg';
import pcat from '../images/cat.jpg';

function Projects () {

    const projects = [
        {
            id: 0,
            title: 'Animal trading card',
            image: pcard,
            link: 'https://github.com/ValerMuresan/2019-Animal-Trading-Card'
        },
        {
            id: 1,
            title: 'Memory game',
            image: pmemory,
            link: 'https://github.com/ValerMuresan/2019-Memory-Game'
        },
        {
            id: 2,
            title: 'Jasmine feed reader',
            image: pjasmine,
            link: 'https://github.com/ValerMuresan/2019-Jasmine-Feed-Reader'
        },
        {
            id: 3,
            title: 'Characters bucket',
            image: pcharacter,
            link: 'https://github.com/ValerMuresan/2020-Characters-Bucket'
        },
        {
            id: 4,
            title: 'Arcade game',
            image: parcade,
            link: 'https://github.com/ValerMuresan/2019-Arcade-Game'
        },
        {
            id: 5,
            title: 'Restaurant reviews app',
            image: prestaurant,
            link: 'https://github.com/ValerMuresan/2020-Restaurant-Reviews-App'
        },
        {
            id: 6,
            title: 'Add app react',
            image: padd,
            link: 'https://github.com/ValerMuresan/2020-Add-App-React'
        },
        {
            id: 7,
            title: 'The favorite movie',
            image: pmovie,
            link: 'https://github.com/ValerMuresan/2020-The-Favourite-Movie'
        },
        {
            id: 8,
            title: 'Lecco`s coffee map',
            image: pcoffee,
            link: 'https://github.com/ValerMuresan/2020-coffee-map'
        },
        {
            id: 9,
            title: 'Click the cat',
            image: pcat,
            link: 'https://github.com/ValerMuresan/2019-Click-The-Cat'
        },
    ] 
     const buildProjects = projects.map(project => {
        return <Card key={project.id} title={project.title} image={project.image} repository={project.link} />})
    return(
        <div className='projects'>
            <h1 tabIndex='0' className='projects__name'>Projects</h1>
            <div className='projects__container'> 
            {buildProjects}
            </div>
        </div>
    )
}
export default Projects;
