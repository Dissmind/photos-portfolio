import React from "react";

import GlobalComponents from "../../../../shared/global-components"
import {MainPhotoBorder} from "../main-photo-border";

export default {
  title: 'About/Atoms/MainPhotoBorder',
  component: MainPhotoBorder,
}

const Template = (args) => (
  <>
    <GlobalComponents />
    <MainPhotoBorder {...args} />
  </>
)

export const Primary = Template.bind({})
Primary.args = {
}