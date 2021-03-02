import React from "react";

import GlobalComponents from "../../../../shared/global-components"
import {Label} from "../label";

export default {
  title: 'Portfolio/Atoms/Label',
  component: Label,
}

const Template = (args) => (
  <>
    <GlobalComponents />
    <Label {...args} />
  </>
)

export const Primary = Template.bind({})
Primary.args = {
}