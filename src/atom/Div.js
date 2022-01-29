import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
    width: calc(${props => props.width || '100%'} - 40px);
    padding: 20px;
    color: ${props => props.color || 'black'};
    border-bottom: 1px solid #DAD6CB;
    background: ${props => props.background || '#EAE8DD'};
    cursor: pointer;
    outline: none;
    &:hover {
        background: #D3B296;
    }
}
`;

const Div = (props) => (
    <StyledDiv width={props.width} color={props.color} background={props.background} onClick={props.onClick}>
        <span style={{fontWeight:'bold', fontSize:'18px'}}>{props.main}</span>
        <br/>
        <span style={{color:'gray'}}>{props.sub}</span>
    </StyledDiv>
);
export default Div;