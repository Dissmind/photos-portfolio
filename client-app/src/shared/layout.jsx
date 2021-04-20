import React from 'react'
import styled, {css} from 'styled-components'


export const Container = styled.div`
  ${props => props.w1600 && css`
    width: 148.1481vh;
    max-width: 1600px;
  `}
  
  
  /*  Flex layouts  */
  
  ${props => props.flex && css`
    display: flex;

    //Columns
    ${props => props.column && css`
      flex-direction: column;

      ${props => props.h100 && css`
        height: 100vh;
      `}
    `}

    //Rows
    ${props => props.row && css`
      flex-direction: row;
    `}

    ${props => props.center && css`
      align-items: center;
      justify-content: center;
    `}
  `}
`

export const Wrapper = styled.div``