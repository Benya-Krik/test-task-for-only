import React, { FC, ReactChild } from 'react'
import styled from 'styled-components'

interface FlexProps { 
  direction?: string;
  justify?: string;
  align?: string;
  wrap?: string;
  padding?: string;
  margin?: string;
  gap?: string;
  children?: React.ReactChild | React.ReactNode;
}

const StyledFlex = styled.div<FlexProps>`
display: flex;
flex-direction: ${({ direction = 'row' }) => direction};
justify-content: ${({ justify = 'stretch' }) => justify};
align-items: ${({ align = 'stretch' }) => align};
flex-wrap: ${({ wrap = 'no-wrap' }) => wrap};
padding: ${({ padding = '0' }) => padding};
margin: ${({ margin = '0' }) => margin};
grid-gap: ${({ gap = '0' }) => gap};
width:100%;
height:100%;
`



const Flex:FC<FlexProps> = ({direction, justify, align, wrap, padding, margin, gap, children}) => {
  return <StyledFlex
   direction= {direction} justify={justify} align={align} wrap={wrap} padding={padding} margin={margin} gap={gap}
   >{children}</StyledFlex>
};

export default Flex;