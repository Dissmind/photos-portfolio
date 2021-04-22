import React from "react";

import {GlobalStyle} from "../../../../../shared/global-components"
import {ThemeLinkList} from "../theme-link-list";

export default {
  title: 'Portfolio/Molecules/ThemeLinkList',
  component: ThemeLinkList,
}

const Template = (args) => (
  <>
    <GlobalStyle />
    <ThemeLinkList {...args} />
  </>
)

export const Primary = Template.bind({})
Primary.args = {
}