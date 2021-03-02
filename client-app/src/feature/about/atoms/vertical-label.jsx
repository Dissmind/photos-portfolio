import React from "react";
import styled from "styled-components";

const VerticalLabelStl = styled.div`
  font-family: 'Solena', serif;
  font-weight: 400;
  font-size: 100px;
  line-height: 120px;
  text-align: right;
  color: #333334;
  opacity: 40%;
  transform: rotate(180deg);
  writing-mode: vertical-lr;
`

export const VerticalLabel = () => {
  return (
    <VerticalLabelStl>Обо мне</VerticalLabelStl>
  )
}

//TODO: что-то не так