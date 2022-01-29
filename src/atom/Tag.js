import React, { useState } from "react";
import styled from "styled-components";
import './TagStyle.css';

const StyledInput = styled.input`
    width: 1px;
    height: 1px;
    overflow: hidden;
    position: absolute;
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    white-space: nowrap;
    border-radius: 7px;
}
`;

function Tag(props) {
    const [isChecked, setIsChecked] = useState(false);

    function changeTagState(){
        if(isChecked){
            setIsChecked(!isChecked);
            props.delTag(props.tagname);
        }
        else{
            setIsChecked(!isChecked);
            props.addTag(props.tagname);
        }
    }

    return (
        <label className='tag'>
            <StyledInput
                type="checkbox"
                onChange={() => {
                    changeTagState();
                }}
            />
            <svg
                className={`checkbox ${isChecked ? "checkbox--active" : ""}`}
                aria-hidden="true"
                viewBox="0 0 15 10"
                fill="none"
            >
                <path
                    d="M1 4.5L5 9L14 1"
                    strokeWidth="2"
                    stroke={isChecked ? "#fff" : "none"}
                />
            </svg>
            &nbsp;
            {props.tagname}
        </label>
    );
}

export default Tag;
