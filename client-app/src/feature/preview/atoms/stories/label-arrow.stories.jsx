import React from "react";

import GlobalComponents from "../../../../shared/global-components"
import {LabelArrow} from "../label-arrow";

export default {
  title: 'Home/Atoms/LabelArrow',
  component: LabelArrow,
}

const Template = (args) => (
  <>
    <GlobalComponents />
    <LabelArrow {...args} />
  </>
)

export const Primary = Template.bind({})
Primary.args = {
}