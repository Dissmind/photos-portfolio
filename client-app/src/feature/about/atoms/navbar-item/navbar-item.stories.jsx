import React from "react";

import GlobalComponents from "../../../../shared/global-components"
import {NavbarItem} from "./navbar-item";

export default {
  title: 'About/Atoms/NavbarItem',
  component: NavbarItem,
}

const Template = (args) => (
  <>
    <GlobalComponents />
    <NavbarItem {...args} />
  </>
)

export const Primary = Template.bind({})
Primary.args = {
  text: "Главная"
}