import React, {useState} from "react";
import styled from "styled-components";
import {BtnSlider} from "../../atoms/btn-slider/btn-slider";

const GroupBtnSliderStl = styled.div`
  display: flex;
  
  div:not(:first-child) {
    margin-left: 10px;
  }
`

const arr = [{}, {}, {}, {}]


export const GroupBtnSlider = () => {






  return(
    <GroupBtnSliderStl>
      {arr.map(() => (
        <BtnSlider />
      ))}
    </GroupBtnSliderStl>
  )
}