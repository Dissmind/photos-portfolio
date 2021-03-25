import React from "react";

import {GlobalStyle} from "../../../../shared/global-components"
import {MainContent} from "../main-content";

export default {
  title: 'Home/Organisms/MainContent',
  component: MainContent,
}

const Template = (args) => (
  <>
    <GlobalStyle />
    <MainContent {...args} />
  </>
)

export const Primary = Template.bind({})
Primary.args = {
}