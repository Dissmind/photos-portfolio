import React from 'react'
import styled from 'styled-components'
import {Navbar} from "../../navbar/organisms/navbar";
import {Label} from "../atoms/label";
import {ThemeLinkList} from "../molecules/theme-link-list";
import {PortfolioLabelArrow} from "../atoms/portfolio-label-arrow";

const PortfolioStl = styled.div`
  min-height: 100%;
  display: flex;
  flex-direction: column;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  & > div:nth-child(1){
    margin-top: 70px;
  }
  & > div:nth-child(2){
    margin-top: 100px;
  }
  & > div:nth-child(3){
    margin-top: 40px;
    margin-left: 360px;
  }
`


export const Portfolio = ({}) => {
  return (
    <PortfolioStl>
      <Navbar type={"menu"} />
      <Wrapper>
        <Label />
        <ThemeLinkList />
        <PortfolioLabelArrow />
      </Wrapper>
    </PortfolioStl>
  )
}