import React, { useState } from "react";
import styled from "styled-components";

const SliderStl = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 8px;
  background-color: #FFFFFF;
  opacity: ${props => (props.isActive) ? 1 : 0.7 };
  cursor: pointer;
`

export const Slider = () => {
  const [isActive, setIsActive] = useState(false)
  return(
    <SliderStl isActive={isActive} onClick={() => setIsActive(!isActive)} />
  )
}