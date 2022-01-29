import React from 'react';

import Input from '../atom/Input.js';
import Button from '../atom/Button.js';

function Login(props){
    return(
        <div className='login'>
            <Input type='text' value='id...'/>
            <div style={{width:'100%', height:'10px'}}/>
            <Input type='password' value='password...'/>
            <div style={{width:'100%', height:'10px'}}/>
            <Button text='login'/>
        </div>
    );
}

export default Login;