import React from "react";

import GlobalComponents from "../../../../shared/global-components"
import {About} from "../about";

export default {
  title: 'About/Pages/About',
  component: About,
}

const Template = (args) => (
  <>
    <GlobalComponents />
    <About {...args} />
  </>
)

export const Primary = Template.bind({})
Primary.args = {
}