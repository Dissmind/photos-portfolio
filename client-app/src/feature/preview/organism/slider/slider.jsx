import React from "react";
import styled from "styled-components";
import Carousel from "react-bootstrap/Carousel";

import image1 from "../../../../attachments/photos/home1.jpg"
import image2 from "../../../../attachments/photos/home2.jpg"

const SliderStl = styled.div`
  width: 1174px;
  height: 729px;
  & > div:first-child{
    padding: 0;
  }
`

export const Slider = ({}) => {
  const SliderItems = [
    {src: image1, alt: "image1"},
    {src: image2, alt: "image2"},
  ]
  return(
    <SliderStl>
      <Carousel controls={false}>
        {SliderItems.map((SliderItem) => (
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={SliderItem.src}
              alt={SliderItem.alt}
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </SliderStl>
  )
}