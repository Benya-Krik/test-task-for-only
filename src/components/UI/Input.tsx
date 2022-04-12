import styled from 'styled-components'
import React, { FC, ReactChild } from 'react'

const StyledInput = styled.div<InputProps>`
& input{
    padding: 21px 20px 20px 20px;
    width: ${props => props.width || '320px'};
    margin-top: 10px;
    font-size: 20px;
    font-style: inherit;
    box-sizing: border-box;
    border: none;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    background-color: #F5F5F5;
    border-radius: 8px;
    transition: all 0.3s;
    outline: ${(props) => (props.outline === 'error' ? '1px solid #E26F6F' : 'none')};
    color: ${(props) => (props.color === 'error' ? '#E26F6F' : '#232323')};

    &:focus, :active, :hover {
        outline: 0;
        outline-offset: 0;
    }

    &:focus {
        outline: ${(props) => (props.outline === 'error' ? '1px solid #E26F6F' : '1px solid #4A67FF;')};
    }
}

& label {
    display: block;
}

& span {
    display: block;
    margin-top: 8px;
    color: #E26F6F;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
}
`

interface InputProps {
    register?: any;
    label?: string;
    required?: any;
    children?: React.ReactChild | React.ReactNode;
    display?: string;
    width?: string;
    errors?: any;
    reset?: any;
    type?: string;
    outline?: string;
}

const InputStyle = {
    theme: ''
}

export const Input:FC<InputProps> = ({register, label, required, children, display, width, errors, reset, type}) => {

    const ErrorTheme = () => InputStyle.theme = 'error';
    const NormalTheme = () => InputStyle.theme = '';

    return (
        <StyledInput display={display} width={width} color={InputStyle.theme} outline={InputStyle.theme}>
            
            <label>{children}</label>
            <input type={type} {...register(label, {required, reset}, errors?.type === 'required' && ErrorTheme(), errors?.type !== 'required' && NormalTheme())}/>
            {errors?.type === 'required' && <span>Обязательное поле</span>}
            
        </StyledInput> 
    )
};

export default Input;