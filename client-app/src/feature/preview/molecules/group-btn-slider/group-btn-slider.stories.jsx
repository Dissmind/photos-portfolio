import React from "react";

import Fonts from "../../../../attachments/font/fonts"
import {GroupBtnSlider} from "./group-btn-slider";

export default {
  title: 'GroupBtnSlider',
  component: GroupBtnSlider,
}

const Template = (args) => (
  <>
    <Fonts />
    <GroupBtnSlider {...args} />
  </>
)

export const Primary = Template.bind({})
Primary.args = {
}