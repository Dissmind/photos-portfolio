import React from "react";

import GlobalComponents from "../../../../shared/global-components"
import {VerticalLabel} from "./vertical-label";

export default {
  title: 'About/Atoms/VerticalLabel',
  component: VerticalLabel,
}

const Template = (args) => (
  <>
    <GlobalComponents />
    <VerticalLabel {...args} />
  </>
)

export const Primary = Template.bind({})
Primary.args = {
}