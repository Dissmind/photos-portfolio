import React from "react";

import {GlobalStyle} from "../../../../shared/global-components"
import {LinkItem} from "../link-item";

export default {
  title: 'Navbar/Atoms/LinkItem',
  component: LinkItem,
}

const Template = (args) => (
  <>
    <GlobalStyle />
    <LinkItem {...args} />
  </>
)

export const Primary = Template.bind({})
Primary.args = {
  text: "Главная"
}