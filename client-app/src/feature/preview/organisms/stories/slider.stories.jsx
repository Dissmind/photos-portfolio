import React from "react";

import GlobalComponents from "../../../../shared/global-components"
import {Slider} from "../slider";

export default {
  title: 'Home/Organisms/Slider',
  component: Slider,
}

const Template = (args) => (
  <>
    <GlobalComponents />
    <Slider {...args} />
  </>
)

export const Primary = Template.bind({})
Primary.args = {
}