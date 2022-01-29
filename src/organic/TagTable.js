import React, { useState } from 'react';

import Tag from '../atom/Tag.js';
import Button from '../atom/Button.js';

function TagTable(props){
    const [selectedTag, setSelectedTag] = useState([]);

    // tag controll
    function addTag(_tagname){
        setSelectedTag(selectedTag => [...selectedTag, _tagname]);
        console.log(selectedTag);
    }
    function delTag(_tagname){
        setSelectedTag(selectedTag.filter(name => name != _tagname));
        console.log(selectedTag);
    }

    const table_style = {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gridGap: '15px',
	    gap: '15px',
        padding: '10px',
        marginBottom: '40px'
    }

    const div_style = {
        display: 'flex',
        justifyContent: 'center'
    }

    return(
        <div className='t_table'>
            <div style={table_style}>
                <Tag tagname='ttt'/>
                <Tag tagname='aaa'/>
                <Tag tagname='eiwk'/>
                <Tag tagname='kvn'/>
                <Tag tagname='ovov'/>
            </div>
            <div style={div_style}>
                <Button text='select' width='60%'/>
            </div>
        </div>
    );
}

export default TagTable;