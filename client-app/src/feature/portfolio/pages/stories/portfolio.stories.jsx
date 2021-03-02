import React from "react";

import GlobalComponents from "../../../../shared/global-components"
import {Portfolio} from "../portfolio";

export default {
  title: 'Portfolio/Pages/Portfolio',
  component: Portfolio,
}

const Template = (args) => (
  <>
    <GlobalComponents />
    <Portfolio {...args} />
  </>
)

export const Primary = Template.bind({})
Primary.args = {
}