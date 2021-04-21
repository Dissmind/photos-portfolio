import React from "react";

import {GlobalStyle} from "../../../../../shared/global-components"
import {VerticalLabel} from "../vertical-label";

export default {
  title: 'About/Atoms/VerticalLabel',
  component: VerticalLabel,
}

const Template = (args) => (
  <>
    <GlobalStyle />
    <VerticalLabel {...args} />
  </>
)

export const Primary = Template.bind({})
Primary.args = {
}