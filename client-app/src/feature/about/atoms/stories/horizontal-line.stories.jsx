import React from "react";

import GlobalComponents from "../../../../shared/global-components"
import {HorizontalLine} from "../horizontal-line";

export default {
  title: 'About/Atoms/HorizontalLine',
  component: HorizontalLine,
}

const Template = (args) => (
  <>
    <GlobalComponents />
    <HorizontalLine {...args} />
  </>
)

export const Primary = Template.bind({})
Primary.args = {
}