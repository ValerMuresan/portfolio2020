import React, { useState } from 'react';
import '../css/contact.css';
import { useSpring, animated as y } from 'react-spring';

function Contact () {
    const [flipped, set] = useState(false)
    const { transform, opacity } = useSpring({
      opacity: flipped ? 1 : 0,
      transform: `perspective(600px) rotateY(${flipped ? 180 : 0}deg)`,
      config: { mass: 10, tension: 300, friction: 100 }
    })
    return(
        <div className='contact__container'>
            <h1 tabIndex='0' className='contact__title'>Contact</h1>
            <div onClick={() => set(state => !state)}>
              <y.div className="card back" tabIndex='o' aria-label='picture from the card' style={{ opacity: opacity.interpolate(o => 1 - o), transform }}>
              </y.div>
              <y.div className="card front" aria-label='picture from the card' style={{ opacity, transform: transform.interpolate(t => `${t} rotateY(180deg)`) }}>
                 <h1 tabIndex='0' className='email'>@Email:</h1>
                 <p tabIndex='0' aria-label='email address'>muresanvaler86@yahoo.com</p>
              </y.div>
          </div>
        </div>
    )
}
export default Contact;
