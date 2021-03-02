import React from "react";

import GlobalComponents from "../../../../shared/global-components"
import {NavbarHome} from "./navbar-home";

export default {
  title: 'Home/Organism/NavbarHome',
  component: NavbarHome,
}

const Template = (args) => (
  <>
    <GlobalComponents />
    <NavbarHome {...args} />
  </>
)

export const Primary = Template.bind({})
Primary.args = {
}