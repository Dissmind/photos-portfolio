import React from "react";

import {GlobalStyle} from "../../../../shared/global-components"
import {Photos} from "../photos";

export default {
  title: 'Photos/Pages/Photos',
  component: Photos,
}

const Template = (args) => (
  <>
    <GlobalStyle />
    <Photos {...args} />
  </>
)

export const Primary = Template.bind({})
Primary.args = {
}