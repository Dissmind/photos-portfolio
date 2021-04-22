import React from "react";

import {GlobalStyle} from "../../../../../shared/global-components"
import {ThemeLinkItem} from "../theme-link-item";

export default {
  title: 'Portfolio/Atoms/ThemeLinkItem',
  component: ThemeLinkItem,
}

const Template = (args) => (
  <>
    <GlobalStyle />
    <ThemeLinkItem {...args} />
  </>
)

export const Primary = Template.bind({})
Primary.args = {
  text: "Test"
}