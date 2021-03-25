import React from "react";

import {GlobalStyle} from "../../../../shared/global-components"
import {About} from "../about";

export default {
  title: 'About/Pages/About',
  component: About,
}

const Template = (args) => (
  <>
    <GlobalStyle />
    <About {...args} />
  </>
)

export const Primary = Template.bind({})
Primary.args = {
}