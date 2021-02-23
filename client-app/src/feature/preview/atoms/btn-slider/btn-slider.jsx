import React, { useState } from "react";
import styled from "styled-components";

const BtnSliderStl = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 8px;
  background-color: #FFFFFF;
  opacity: ${props => (props.isActive) ? 1 : 0.7};
  cursor: pointer;
  
  //&:hover{
  //  opacity: 1;
  //  transition: 0.25s;
  //}
`

export const BtnSlider = ({}) => {

const [isActive, setIsActive] = useState(false)




  return(
    <BtnSliderStl isActive={isActive} onClick={() => (setIsActive(!isActive))} />
  )
}