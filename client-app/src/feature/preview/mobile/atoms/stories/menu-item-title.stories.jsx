import React from "react";

import {GlobalStyle} from "../../../../../shared/global-components"
import {MenuItemTitle} from "../menu-item-title";

export default {
  title: 'Home/Atoms/MenuItemTitle-M',
  component: MenuItemTitle,
}

const Template = (args) => (
  <>
    <GlobalStyle />
    <MenuItemTitle {...args} />
  </>
)

export const Primary = Template.bind({})
Primary.args = {
  title: 'Title'
}