import React from 'react'
import styled from 'styled-components'
import {Navbar} from "../../../navbar/desktop/organisms/navbar";
import {Label} from "../atoms/label";
import {ThemeLinkList} from "../molecules/theme-link-list";
import {PortfolioLabelArrow} from "../atoms/portfolio-label-arrow";
import {Footer} from "../../../footer/organisms/footer";

const PortfolioStl = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`

const WrapperStl = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-bottom: 1.875rem;

  //Label
  & > div:nth-child(1){
    margin-top: 4.375rem;
  }
  
  //ThemeLinkList
  & > div:nth-child(2){
    margin-top: 6.25rem;
  }
  
  //PortfolioLabelArrow
  & > div:nth-child(3){
    margin-top: 2.5rem;
    margin-left: 22.5rem;
  }
`


export const Portfolio = () => {
  return (
    <PortfolioStl>
      <Navbar type={"menu"} />

      <WrapperStl>
        <Label />
        <ThemeLinkList />
        <PortfolioLabelArrow />
      </WrapperStl>

      <Footer />
    </PortfolioStl>
  )
}