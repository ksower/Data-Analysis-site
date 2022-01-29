import React from 'react';

import Div from '../atom/Div.js';

import ProjectJson from '../dataset/Projects.json';

function ProjectList(props){
    const proj_list = ProjectJson.map((item, index) => {
        const data_list = item.data.join(', ');
        return(
            <Div main={item.name} sub={data_list}/>
        );
    });

    return(
        <div className='comlist'>
            {proj_list}
        </div>
    );
}

export default ProjectList;

