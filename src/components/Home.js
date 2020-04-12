import React from 'react';
import '../css/home.css';
import profile from '../images/profile.jpg';
import Typical from 'react-typical';


function Home () {
    return (
        <div className='home__container'>
            <div className='home_image'>
            <div tabIndex='0' className='profile-img' aria-label='Description of the avatar image'>
                <img src={profile} alt='Avatar'/>
             </div>
                <h1 tabIndex='0' aria-label='Auto type text' className='auto_type'>
                    <Typical
                    steps={['I landed in the world of Web Development in 2017 🪂 🖥️ 📡 📱 📚', 300]}
                    loop={Infinity}
                    wrapper='b' />
                </h1>
            </div>
        </div>
    )
}
export default Home;