import React, {useState} from "react";
import styled from "styled-components";
import {Slider} from "../../atoms/slider/slider";

const SliderGroupStl = styled.div`
  display: flex;
  
  div:nth-child(n){
    margin-left: 20px;
  }
  
  div:first-child{
    margin: 0;
  }
`

export const SliderGroup = () => {

  return(
    <SliderGroupStl>
      <Slider />
      <Slider />
      <Slider />
      <Slider />
    </SliderGroupStl>
  )
}

//TODO: this and Slider