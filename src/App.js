import './App.css';
import './fonts/font.css';

import Button from './atom/Button.js';
import Input from './atom/Input.js';
import Logo from './atom/Logo.js';
import Div from './atom/Div.js';
import Tag from './atom/Tag.js';

import Login from './organic/Login.js';
import Comp from './organic/ProjectList.js';

import Title from './page/Title.js';
import Project from './page/Project.js';
import DataSelect from './page/DataSelect.js';

function App() {
    return (
        <div className="App">
            <Title/>
            <div style={{width:'100%', height:'50px', background:'white'}}></div>
            <Project/>
            <div style={{width:'100%', height:'50px', background:'white'}}></div>
            <DataSelect/>
        </div>
    );
}

export default App;
