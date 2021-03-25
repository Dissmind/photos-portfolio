import React from "react";

import {GlobalStyle} from "../../../../shared/global-components"
import {Records} from "../records";

export default {
  title: 'Records/Pages/Records',
  component: Records,
}

const Template = (args) => (
  <>
    <GlobalStyle />
    <Records {...args} />
  </>
)

export const Primary = Template.bind({})
Primary.args = {
}