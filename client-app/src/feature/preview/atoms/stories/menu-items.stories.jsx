import React from "react";

import {MenuItems} from "../menu-items";
import {GlobalStyle} from "../../../../shared/global-components"

export default {
    title: 'Home/Atoms/MenuItems',
    component: MenuItems,
}

const Template = (args) => (
  <>
    <GlobalStyle />
    <MenuItems {...args} />
  </>
)

export const Primary = Template.bind({})
Primary.args = {
    text: "test-text",
}