import React from "react";

import GlobalComponents from "../../../../shared/global-components"
import {LinkList} from "../link-list";

export default {
  title: 'Navbar/Molecules/LinkList',
  component: LinkList,
}

const Template = (args) => (
  <>
    <GlobalComponents />
    <LinkList {...args} />
  </>
)

export const Primary = Template.bind({})
Primary.args = {
}