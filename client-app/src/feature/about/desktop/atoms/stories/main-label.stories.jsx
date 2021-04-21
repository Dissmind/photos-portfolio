import React from "react";

import {GlobalStyle} from "../../../../../shared/global-components"
import {MainLabel} from "../main-label";

export default {
  title: 'About/Atoms/MainLabel',
  component: MainLabel,
}

const Template = (args) => (
  <>
    <GlobalStyle />
    <MainLabel {...args} />
  </>
)

export const Primary = Template.bind({})
Primary.args = {
}