import React from "react";
import styled from "styled-components";

const VerticalLabelStl = styled.div`
  font-family: 'Solena', serif;
  font-weight: 400;
  font-size: 100px;
  color: #333334;
  opacity: 40%;
  transform: rotate(-90deg);
  width: 244px;
  height: 120px;
`

export const VerticalLabel = () => {
  return (
    <VerticalLabelStl>Обо мне</VerticalLabelStl>
  )
}

//TODO: что-то не так