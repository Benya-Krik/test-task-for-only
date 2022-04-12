import React, { FC, ReactChild } from 'react'
import styled from 'styled-components'



const StyledButton = styled.button<ButtonProps>`
padding: ${props => props.padding || '20px'};
margin-top: ${props => props.marginTop || '0'};
margin-right: ${props => props.marginRight || '0'};
margin-bottom: ${props => props.marginBottom || '0'};
margin-left: ${props => props.marginLeft || '0'};
font-size: ${props => props.fontSize || '18px'};
font-weight: 700;
box-sizing: border-box;
font-style: inherit;
border: none;
transition: all .3s;
background-color: ${props => props.background || '#4A67FF'};
color: ${props => props.color || '#FFFFFF'};

border-radius: 8px;
width: ${props => props.width || '320px'};

&:focus, :active, :hover {
    outline: 0;
    outline-offset: 0;
    
}
&:hover {
    cursor:pointer;
    transform: scale(1.01)
}
`

interface ButtonProps {
    padding?: string;
    marginTop?: string;
    marginRight?: string;
    marginBottom?: string;
    marginLeft?: string;
    fontSize?: string;
    background?: string;
    color?: string;
    width?: string;
    children?: React.ReactChild | React.ReactNode;
    onClick?: any;
}

export const Button:FC<ButtonProps> = ({padding, marginTop, marginRight, marginBottom, marginLeft, fontSize, background, color, width, children, onClick}) => {

  
  return (
    <StyledButton 
    
    onClick={onClick} padding={padding} marginTop={marginTop} marginRight={marginRight} marginBottom={marginBottom} marginLeft={marginLeft} fontSize={fontSize}  background={background}  color={color}  width={width} 
    
    >{children}</StyledButton>
  )
};

export default Button;