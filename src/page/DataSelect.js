import React, { useState } from 'react';
import './DataSelectStyle.css';

import Logo from '../atom/Logo.js';
import Button from '../atom/Button.js';
import DataColumnList from '../organic/DataColumnList.js';
import TagTable from '../organic/TagTable.js';

function DataSelect(props){

    return(
        <div className='dataselect'>
            <div className='data-wrapper'>
                <Logo size='34px'/>
                <div style={{width:'100%', height:'30px'}}/>

                <div className='data-grid'>
                    <div id='dg-left'>
                        <Button text='new+' width='80px'/>
                        <div style={{width:'100%', height:'20px'}}/>

                        <div id='data-list'>
                            <DataColumnList/>
                        </div>
                    </div>

                    <div id='dg-right'>
                        <TagTable/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DataSelect;