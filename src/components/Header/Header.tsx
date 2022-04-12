import React from 'react';
import styled from 'styled-components';
import Flex from '../styles/Flex';

const StyledHeader = styled.header`

position: fixed;
width: 100%;
& h1 {
    color: black;
    font-size: 64px;
    font-weight: 700;

    &:hover{
        cursor: pointer;
    }
}
` 

export const Header = () => {
  return (
    <StyledHeader>
        <Flex justify='center' padding='40px'>
        <h1>ONLY.</h1>
        </Flex>
    </StyledHeader>
  )
};

export default Header;
