import React from "react";

import GlobalComponents from "../../../shared/global-components"
import {Home} from "./home";

export default {
  title: 'Home/Pages/Home',
  component: Home,
}

const Template = (args) => (
  <>
    <GlobalComponents />
    <Home {...args} />
  </>
)

export const Primary = Template.bind({})
Primary.args = {
}