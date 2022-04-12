import React from 'react'
import styled from 'styled-components'
import Flex from '../styles/Flex';
import Input from './Input';
import Checkbox from './Checkbox';
import Error from './Error';
import { useForm } from 'react-hook-form';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import user from 'src';
import Button from './Button';




const StyledForm = styled.form`
display: flex;
justify-content: center;
align-items: center;
`



export const Form = () => {


    const navigate = useNavigate();

    const { register,formState:{ errors }, handleSubmit, reset} = useForm();

    const [loginValue, setLogin] = useState<string>('');

    const [undefLogin, showError] = useState<string>('none');

    const [buttonState, blockButton] = useState<string>('#4A67FF');

    const onSubmit = (data: any) => {
        setLogin(data.login);

        if (data.login === user.name && data.password === user.password) {
            blockButton('#99A9FF')
           setTimeout(()=> {
                navigate('/profile'); 
        },1500)
        } else {
            showError('block');
        }
    };

    return (

        <StyledForm onSubmit={handleSubmit(onSubmit)}>
            <Flex gap='20px' align='start' direction="column">

                <Error display={undefLogin} width='640px'>Пользователя {loginValue} не существует</Error>
                
                <Input register={register} reset required errors={errors.login} label='login' width='640px'>Логин</Input>

                <Input type='password' register={register} reset errors={errors.password} label='password' required width='640px'>Пароль</Input>

                <Checkbox></Checkbox>

                <Button background={buttonState} width='640px'>Войти</Button>
                
            </Flex>
        </StyledForm>
    )
};

export default Form;