import React from "react";

import Fonts from "../../../../attachments/font/fonts"
import {BtnSlider} from "./btn-slider";

export default {
  title: 'BtnSlider',
  component: BtnSlider,
}

const Template = (args) => (
  <>
    <Fonts />
    <BtnSlider {...args} />
  </>
)

export const Primary = Template.bind({})
Primary.args = {
}