import React from "react";

import {MenuItems} from "./menu-items";

export default {
    title: 'MenuItems',
    component: MenuItems,
}

const Template = (args) => <MenuItems {...args} />

export const Primary = Template.bind({})
Primary.args = {
    text: "test-text",
}