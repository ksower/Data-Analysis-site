import React from 'react';

import Div from '../atom/Div.js';

import DataColumnJson from '../dataset/Datas.json';

function DataColumnList(props){
    const data_list = DataColumnJson.map((item, index) => {
        const column_list = item.column.join(', ');
        return(
            <Div main={item.name} sub={column_list}/>
        );
    });

    return(
        <div className='comlist'>
            {data_list}
        </div>
    );
}

export default DataColumnList;

