import React from 'react';
import { FiMenu } from 'react-icons/fi';
import { Link } from 'react-router-dom';


const Header = (props) => {
    return (
        <nav className='headnav'>
            <div className='nav__container'>
                <div tabIndex='0' className='menu' aria-label='menu button' role='navigation'>
                    <FiMenu 
                        size='35'
                        color='#ebe0e0'
                        style={{marginLeft: '1rem', cursor: 'pointer'}}
                        aria-label='Toggle button'
                        tabIndex='0'
                        onClick={props.toggleHandle}>
                    </FiMenu>
                </div>
                <div className='space_1'></div>
                <h1 tabIndex='0' 
                    className='my__name'>Valer Muresan
                </h1>
                <div className='space_2'></div>
                <div className='navigation__items'>
                    <ul>
                        <li tabIndex='0' aria-label='Link to home page'><Link to={'/'}>Home</Link></li>
                        <li tabIndex='0' aria-label='Link to education page'><Link to={'/education'}>Education</Link></li>
                        <li tabIndex='0' aria-label='Link to projects page'><Link to={'/projects'}>Projects</Link></li>
                        <li tabIndex='0' aria-label='Link to contact page'><Link to={'/contact'}>Contact</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
export default Header;