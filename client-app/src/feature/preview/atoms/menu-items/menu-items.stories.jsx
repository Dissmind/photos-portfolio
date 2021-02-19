import React from "react";

import {MenuItems} from "./menu-items";
import Fonts from "../../../../attachments/font/fonts"

export default {
    title: 'MenuItems',
    component: MenuItems,
}

const Template = (args) => (
  <>
    <Fonts />
    <MenuItems {...args} />
  </>
)

export const Primary = Template.bind({})
Primary.args = {
    text: "test-text",
}