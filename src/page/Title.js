import React from 'react';
import './TitleStyle.css';

import Logo from '../atom/Logo.js';
import Login from '../organic/Login.js';

import graph from './images/graph.jpeg';

function Title(props){
    return(
        <div className='title'>
            <div className='title-wrapper'>
                <Logo/>
                <img src={graph}/>
                <Login/>
            </div>
        </div>
    )
}

export default Title;