import React from "react";

import GlobalComponents from "../../../../shared/global-components"
import {MainLabel} from "../main-label";

export default {
  title: 'About/Molecules/MainLabel',
  component: MainLabel,
}

const Template = (args) => (
  <>
    <GlobalComponents />
    <MainLabel {...args} />
  </>
)

export const Primary = Template.bind({})
Primary.args = {
}