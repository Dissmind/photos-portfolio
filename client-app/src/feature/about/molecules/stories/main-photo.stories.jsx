import React from "react";

import GlobalComponents from "../../../../shared/global-components"
import {MainPhoto} from "../main-photo";

export default {
  title: 'About/Molecules/MainPhoto',
  component: MainPhoto,
}

const Template = (args) => (
  <>
    <GlobalComponents />
    <MainPhoto {...args} />
  </>
)

export const Primary = Template.bind({})
Primary.args = {
}