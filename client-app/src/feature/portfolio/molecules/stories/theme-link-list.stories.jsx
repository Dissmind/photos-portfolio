import React from "react";

import GlobalComponents from "../../../../shared/global-components"
import {ThemeLinkList} from "../theme-link-list";

export default {
  title: 'Portfolio/Molecules/ThemeLinkList',
  component: ThemeLinkList,
}

const Template = (args) => (
  <>
    <GlobalComponents />
    <ThemeLinkList {...args} />
  </>
)

export const Primary = Template.bind({})
Primary.args = {
}