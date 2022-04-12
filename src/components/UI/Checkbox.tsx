import React, { FC } from 'react'
import styled from 'styled-components'


const StyledCheckbox = styled.div`
& label {
  margin-left: 34px;
  position: relative;
  box-sizing: border-box;
  color: #1F1F1F;

  &:hover {
    opacity: 0.9
  }

  &::before {
    content: '';
    box-sizing: border-box;
    position: absolute;
    top: -2px;
    left: -34px;
    width: 20px;
    height: 20px;
    border: 1px solid #1F1F1F;
    border-radius: 4px;
  }
}
& input {
  display:none;

  &:checked + label::after {
    content: '';
    position: absolute;
    z-index: 2;
    top: 1px;
    left: -31px;
    width: 14px;
    height: 14px;
    background-color: #4A67FF;
    border-radius: 2px;
  }
}

`

export const Checkbox:FC = () => {
  return (
    <StyledCheckbox>
      <input id="remember" type="checkbox"></input>
      <label htmlFor="remember">Запомнить пароль</label>
    </StyledCheckbox>
  )
};

export default Checkbox;
