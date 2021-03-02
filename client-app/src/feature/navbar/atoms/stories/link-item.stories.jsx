import React from "react";

import GlobalComponents from "../../../../shared/global-components"
import {LinkItem} from "../link-item";

export default {
  title: 'Navbar/Atoms/LinkItem',
  component: LinkItem,
}

const Template = (args) => (
  <>
    <GlobalComponents />
    <LinkItem {...args} />
  </>
)

export const Primary = Template.bind({})
Primary.args = {
  text: "Главная"
}