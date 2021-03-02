import React from "react";

import {MenuItems} from "../menu-items";
import GlobalComponents from "../../../../shared/global-components"

export default {
    title: 'Home/Atoms/MenuItems',
    component: MenuItems,
}

const Template = (args) => (
  <>
    <GlobalComponents />
    <MenuItems {...args} />
  </>
)

export const Primary = Template.bind({})
Primary.args = {
    text: "test-text",
}