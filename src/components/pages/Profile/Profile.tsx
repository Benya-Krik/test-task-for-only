import React from 'react'
import styled from 'styled-components'
import Flex from 'src/components/styles/Flex';
import Button from 'src/components/UI/Button';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import user from '../../..';

const StyledProfile = styled.section`
width: 100%;
height: 100%;

& h2 {
    font-size: 40px;
    font-weight: 400;
    line-height: 48.84px;

    & span {
      font-weight: 700;
    }
}
`

export const Profile = () => {

  const { handleSubmit } = useForm();

  const navigate = useNavigate();

  const onClick = ()=> {
    navigate('/');
  }

  return (
    <StyledProfile>
        <Flex gap='50px' direction='column' justify='center' align='center'>
            <h2>Здравствуйте, <span>{user.name}</span></h2>
            <Button onClick={handleSubmit(onClick)} width='200px' color='#000000' background='#F5F5F5'>Выйти</Button>
        </Flex>
    </StyledProfile>
  )
};

export default Profile;