import React from "react";

import GlobalComponents from "../../../../shared/global-components"
import {GroupNavbarItem} from "./group-navbar-item";

export default {
  title: 'About/Molecules/GroupNavbarItem',
  component: GroupNavbarItem,
}

const Template = (args) => (
  <>
    <GlobalComponents />
    <GroupNavbarItem {...args} />
  </>
)

export const Primary = Template.bind({})
Primary.args = {
}