import React from 'react';
import '../css/card.css';


function Card (props) {
    return (
        <div tabIndex='0' className='project'>
            <div tabIndex='0' className='project__title'>{props.title}</div>
            <div tabIndex='0' className='project__image'>
                <img src={props.image} alt='Project chart'/>
            </div>
            <div role='navigation' tabIndex='0' aria-label='link to github repository' className='repository'><a href={props.repository}>GitHub repository</a></div>        
        </div>
    )
}
export default Card;

