import React from "react";

import {GlobalStyle} from "../../../../shared/global-components"
import {Portfolio} from "../portfolio";

export default {
  title: 'Portfolio/Pages/Portfolio',
  component: Portfolio,
}

const Template = (args) => (
  <>
    <GlobalStyle />
    <Portfolio {...args} />
  </>
)

export const Primary = Template.bind({})
Primary.args = {
}