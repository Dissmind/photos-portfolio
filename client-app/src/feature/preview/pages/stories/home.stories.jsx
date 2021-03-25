import React from "react";

import {GlobalStyle} from "../../../../shared/global-components"
import {Home} from "../home";

export default {
  title: 'Home/Pages/Home',
  component: Home,
}

const Template = (args) => (
  <>
    <GlobalStyle />
    <Home {...args} />
  </>
)

export const Primary = Template.bind({})
Primary.args = {
}