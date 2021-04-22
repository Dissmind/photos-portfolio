import React from "react";

import {GlobalStyle} from "../../../../../shared/global-components"
import {Label} from "../label";

export default {
  title: 'Portfolio/Atoms/Label',
  component: Label,
}

const Template = (args) => (
  <>
    <GlobalStyle />
    <Label {...args} />
  </>
)

export const Primary = Template.bind({})
Primary.args = {
}