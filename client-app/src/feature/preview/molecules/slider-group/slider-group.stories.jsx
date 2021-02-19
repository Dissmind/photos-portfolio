import React from "react";

import Fonts from "../../../../attachments/font/fonts"
import {SliderGroup} from "./slider-group";

export default {
  title: 'SliderGroup',
  component: SliderGroup,
}

const Template = (args) => (
  <>
    <Fonts />
    <SliderGroup {...args} />
  </>
)

export const Primary = Template.bind({})
Primary.args = {
}