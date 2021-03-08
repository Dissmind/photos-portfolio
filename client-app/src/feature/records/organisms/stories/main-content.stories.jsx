import React from "react";

import GlobalComponents from "../../../../shared/global-components"
import {MainContent} from "../main-content";

export default {
  title: 'Records/Organisms/MainContent',
  component: MainContent,
}

const Template = (args) => (
  <>
    <GlobalComponents />
    <MainContent {...args} />
  </>
)

export const Primary = Template.bind({})
Primary.args = {
}