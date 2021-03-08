import React from 'react'
import styled from 'styled-components'
import BgImg1 from "../../../attachments/photos/RecordsBg1.svg"
import BgImg2 from "../../../attachments/photos/RecordsBg2.svg"

const FormStl = styled.div`
  position: relative;
  width: 725px;
  height: 335px;
  background-color: #14402D;
  font-family: 'PentaLight', serif;
  font-weight: 400;
  font-size: 45px;
  line-height: 45px;
  color: #FFFFFF;
  display: flex;
  justify-content: center;
  padding: 40px 45px 50px;
`

const BackgroundImg = styled.img`
  
`


export const Form = ({}) => {

  return (
    <FormStl>
      <BackgroundImg src={BgImg1} alt={"BgImg1"} />
      <BackgroundImg src={BgImg2} alt={"BgImg2"} />
      Text
    </FormStl>
  )
}

//TODO: тута