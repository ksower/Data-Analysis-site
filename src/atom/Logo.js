import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
    width: ${props => props.width || '100%'};
    font-size: ${props => props.size || '40px'};
    text-align: center;
    font-family: dangdanghae;
    color: black;
}
`;

const Logo = (props) => (
    <StyledDiv width={props.width} size={props.size}>
        Skipo
    </StyledDiv>
);
export default Logo;