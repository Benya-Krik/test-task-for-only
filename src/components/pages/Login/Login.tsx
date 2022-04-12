import React from 'react'
import styled from 'styled-components'
import Flex from 'src/components/styles/Flex';
import Form from 'src/components/UI/Form';
// import Form from '../UI/Form';


const StyledLogin = styled.section`
width: 100%;
height: 100%;
`


export const Login = () => {
  return (
    <StyledLogin>
      <Flex align='center' justify="center">

        <Form />
          
      </Flex>
    </StyledLogin>
  )
};

export default Login;