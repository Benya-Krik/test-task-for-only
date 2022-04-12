import React, { FC, ReactChild } from 'react'
import styled from 'styled-components';

const StyledError = styled.div<ErrorProps>`
display: ${props => props.display || 'none'};
padding: 20px 20px 20px 54px;
background-color: #F5E9E9;
outline: 1px solid #E26F6F;
width: ${props => props.width || '320px'};
border-radius: 8px;
position: relative;
font-size: 14px;
margin-bottom:20px;

& div {
    position:absolute;
    left: 19px;
    top: 19px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #FFC8C8;
    

    & span {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: #EE6565;
        font-size: 14px;
    }
}
`

interface ErrorProps {
    display: string;
    width: string;
    children?: React.ReactChild | React.ReactNode;
}

export const Error:FC<ErrorProps> = ({width, children, display}) => {

  return (
    <StyledError display={display} width={width}><div><span>!</span></div>{children}</StyledError>
  )
};

export default Error;