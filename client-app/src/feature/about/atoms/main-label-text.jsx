import React from "react";
import styled from "styled-components";

const MainLabelTextStl = styled.div`
  font-family: 'PentaLight', serif;
  font-weight: 400;
  line-height: 45px;
  text-align: center;
  font-size: 45px;
  color: #333334;
`

export const MainLabelText = ({text}) => {
  return (
    <MainLabelTextStl>{text}</MainLabelTextStl>
  )
}