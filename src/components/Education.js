import React, { Component } from  'react';
import '../css/education.css';
import badge from '../images/fewdn_badge.png';
import icon from '../images/scholarship.png';
import certificate from '../images/certificate.png';

class Education extends Component {
    state = {
        challengeTopics: [
            'Html', 
            'CSS', 
            'Introduction to JavaScript', 
            'Data Types & Variables', 
            'Conditionals',
            'Loops',
            'Functions',
            'Arrays',
            'Objects',
            'The Basics: the DOM, $, and Selectors',
            'DOM manipulation using jQuery',
            'Event listeners with jQuery'
        ],
        nanodegreeTopics: [
            'Web foundations',
            'Responsive design',
            'Responsive images',
            'Markdown syntax',
            'Writing READMEs',
            'Web programming with JavaScript',
            'Shell workshop',
            'Version control',
            'Git course',
            'Creating content with JS',
            'Browser events',
            'Accessibility',
            'Focus',
            'Semantinc Navigation',
            'ARIA',
            'Objects, Classes, Object Oriented Programing',
            'Functions, ES6',
            'Build tools Gulp, Grunt',
            'Testing with Jasmine',
            'Separation of concerns MVC',
            'Promises',
            'Ajax with XHR, jQuery, Fetch',
            'Single page apps',
            'Frameworks: Backbone, Angular, Ember',
            'Service worker',
            'React'
        ]
    }
    render() {
        return (
            <div className='education__container'>
                <h1 tabIndex='0' className='training'>Training</h1>
                <div className='content'>
                    <div className='challenge'>
                        <div className='challenge__badge'
                               tabIndex='o' 
                               aria-label='Udacity scholarship challenge badge'>
                               <a href='https://www.udacity.com/'><img src={badge} alt='Udacity scholarship badge'/></a>  
                        </div>
                        <div tabIndex='0' className='challenge__info'>
                            <h3 tabIndex='0' className='duration'>November 2017-February 2018</h3>
                            <ul>
                                {this.state.challengeTopics.map(ctopic => (<li tabIndex='0' key={ctopic}>{ctopic}</li>))}
                            </ul>
                            <div role='navigation' tabIndex='0' className='details' aria-label='More details link'>
                                <a href='https://blog.udacity.com/2017/09/announcing-60000-challenge-scholarships-udacity-google.html'>more details++</a>
                            </div>
                        </div>
                    </div>
                    <div className='scholarship'>
                        <div className='scholarship__icon'
                            tabIndex='0' 
                            aria-label='Front end web developer nanodegree scholarship challenge icon'>
                            <a href='https://www.udacity.com/course/front-end-web-developer-nanodegree--nd0011'><img src={icon} alt='Udacity nanodegree program'/></a>  
                        </div>
                        <div className='scholarship__info'>
                            <h3 tabIndex='0'  className='period'>March 2018-August 2018</h3>
                            <ul>
                                {this.state.nanodegreeTopics.map(ntopic => (<li tabIndex='0' key={ntopic}>{ntopic}</li>))}
                            </ul>
                            <div  role='navigation' tabIndex='0' className='certification' aria-label='Certification link'>
                                <a href={certificate}>certification++</a>
                            </div>
                        </div>
                   </div>
                </div>
            </div>
        )
    }
}
export default Education;

        
        
        
        
       
        
    
       
        
        
    