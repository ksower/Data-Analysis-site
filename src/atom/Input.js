import React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
    width: calc(${props => props.width || '100%'} - 15px);
    height: 40px;
    padding-left: 15px;
    font-size: 18px;
    color: ${props => props.color || 'black'};
    border: none;
    background: ${props => props.background || '#DAD6CB'};
    outline: none;
}
`;

const Input = (props) => (
    <StyledInput 
        type={props.type} 
        placeholder={props.value} 
        width={props.width} 
        color={props.color} 
        background={props.background} 
        onClick={props.onClick}/>
);
export default Input;