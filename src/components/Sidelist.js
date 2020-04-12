import React from 'react';
import { Link } from 'react-router-dom';
import { IoMdCloseCircleOutline } from 'react-icons/io';

const Sidelist = (props) => {
    let sideList = 'side__list';
    if (props.show) {
        sideList = 'side__list show';
    }
    return (
        <nav className={sideList}>
            <div className='sidelist__items'>
                <ul >
                    <li tabIndex='0'><Link to={'/'}>Home</Link></li>
                    <li tabIndex='0'><Link to={'/education'}>Education</Link></li>
                    <li tabIndex='0'><Link to={'/projects'}>Projects</Link></li>
                    <li tabIndex='0'><Link to={'/contact'}>Contact</Link></li>
                </ul>
                <IoMdCloseCircleOutline
                        size='25'
                        color='#ebe0e0'
                        style={{marginLeft: '3rem', cursor: 'pointer', paddingTop: '1px'}}
                        aria-label='Close button'
                        tabIndex='0'
                        onClick={props.closeHandler}>
                </IoMdCloseCircleOutline>
            </div>
        </nav>
    )
}
export default Sidelist;