import React from "react";

import {GlobalStyle} from "../../../../shared/global-components"
import {LinkList} from "../link-list";

export default {
  title: 'Navbar/Molecules/LinkList',
  component: LinkList,
}

const Template = (args) => (
  <>
    <GlobalStyle />
    <LinkList {...args} />
  </>
)

export const Primary = Template.bind({})
Primary.args = {
}