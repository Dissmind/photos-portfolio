import React  from "react";
import styled from "styled-components";
import {media} from "../../../../shared/media-queries";


const ToggleSwitchStl = styled.input`
  position: relative;

  width: 6.4814vh;
  height: 3.2407vh;
  appearance: none;
  background-color: #FFFFFF;
  border-radius: 1.6666vh;
  outline: none;
  transition: 0.3s;
  cursor: pointer;

  :checked{
    //background-color: ;
  }

  ::before{
    position: absolute;

    content: "";
    width: 3.2407vh;
    height: 3.2407vh;
    border: #FFFFFF 0.1851vh solid;
    border-radius: 1.6666vh;
    background-color: #133F2C;
    transition: 0.3s;
  }

  :checked::before{
    transform: translateX(3.2407vh);
  }
  
  
  ${media.desktop} {
    width: 4.375vw;
    height: 2.1875vw;
    border-radius: 1.125vw;

    ::before{
      width: 2.1875vw;
      height: 2.1875vw;
      border: #FFFFFF 0.125vw solid;
      border-radius: 1.125vw;
    }

    :checked::before{
      transform: translateX(2.1875vw);
    }
  }
`


export const ToggleSwitch = ({onToggle}) => {
  return (
    <ToggleSwitchStl type={"checkbox"} onClick={onToggle} />
  )
}