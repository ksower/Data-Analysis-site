import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
    width: ${props => props.width || '100%'};
    height: 40px;
    font-size: 18px;
    color: ${props => props.color || 'white'};
    border: none;
    background: ${props => props.background || '#B76452'};
    cursor: pointer;
    outline: none;
    &:hover {
        background: #864638;
    }
}
`;

const Button = (props) => (
    <StyledButton width={props.width} color={props.color} background={props.background} onClick={props.onClick}>
        {props.text}
    </StyledButton>
);
export default Button;