import React from "react";

import Fonts from "../../../../attachments/font/fonts"
import {Slider} from "./slider";

export default {
  title: 'Slider',
  component: Slider,
}

const Template = (args) => (
  <>
    <Fonts />
    <Slider {...args} />
  </>
)

export const Primary = Template.bind({})
Primary.args = {
}