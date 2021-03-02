import React from "react";

import GlobalComponents from "../../../../shared/global-components"
import {NavbarMain} from "./navbar-main";

export default {
  title: 'About/Organism/NavbarMain',
  component: NavbarMain,
}

const Template = (args) => (
  <>
    <GlobalComponents />
    <NavbarMain {...args} />
  </>
)

export const Primary = Template.bind({})
Primary.args = {
}