import React from 'react';
import './ProjectStyle.css';

import Logo from '../atom/Logo.js';
import Button from '../atom/Button.js';
import ProjectList from '../organic/ProjectList.js';

function Project(props){
    return(
        <div className='project'>
            <div className='project-wrapper'>
                <Logo size='34px'/>
                <div style={{width:'100%', height:'30px'}}/>

                <Button text='new+' width='80px'/>
                <div style={{width:'100%', height:'20px'}}/>

                <div id='project-list'>
                    <ProjectList/>
                </div>
            </div>
        </div>
    );
}

export default Project;