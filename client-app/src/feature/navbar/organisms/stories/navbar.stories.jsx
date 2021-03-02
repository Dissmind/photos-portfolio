import React from "react";

import GlobalComponents from "../../../../shared/global-components"
import {Navbar} from "../navbar";

export default {
  title: 'Navbar/Organisms/Navbar',
  component: Navbar,
}

const Template = (args) => (
  <>
    <GlobalComponents />
    <Navbar {...args} />
  </>
)

export const Lang = Template.bind({})
Lang.args = {
  type: "lang"
}

export const Menu = Template.bind({})
Menu.args = {
  type: "menu"
}