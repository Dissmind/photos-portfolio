import React from "react";

import {GlobalStyle} from "../../../../shared/global-components"
import {MainPhoto} from "../main-photo";

export default {
  title: 'About/Molecules/MainPhoto',
  component: MainPhoto,
}

const Template = (args) => (
  <>
    <GlobalStyle />
    <MainPhoto {...args} />
  </>
)

export const Primary = Template.bind({})
Primary.args = {
}