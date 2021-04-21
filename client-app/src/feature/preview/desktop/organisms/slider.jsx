import React from "react";
import styled from "styled-components";
import Carousel from "react-bootstrap/Carousel";
import {media} from "../../../../shared/media-queries";

import image1 from "../../../../attachments/photos/home1.jpg"
import image2 from "../../../../attachments/photos/home2.jpg"

const SliderStl = styled.div`
  width: 108.7037vh;
  height: 100%;
  user-select: none;
  
  ${media.desktop} {
    width: 73.375vw;
  }
`

export const Slider = () => {

  const SliderItems = [
    {src: image1, alt: "image1"},
    {src: image2, alt: "image2"},
  ]

  return(
    <SliderStl>
      <Carousel controls={false}>
        {
          SliderItems.map((SliderItem) => (
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={SliderItem.src}
                alt={SliderItem.alt}
              />
            </Carousel.Item>
          ))
        }
      </Carousel>
    </SliderStl>
  )
}