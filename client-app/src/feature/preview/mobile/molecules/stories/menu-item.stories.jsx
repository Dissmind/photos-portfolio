import React from "react";

import {GlobalStyle} from "../../../../../shared/global-components"
import {MenuItem} from "../menu-item";

export default {
  title: 'Home/Molecules/MenuItem-M',
  component: MenuItem,
}

const Template = (args) => (
  <>
    <GlobalStyle />

    <MenuItem {...args} />
  </>
)

export const Primary = Template.bind({})
Primary.args = {
}