import React from "react";

import GlobalComponents from "../../../../shared/global-components"
import {Photos} from "../photos";

export default {
  title: 'Photos/Pages/Photos',
  component: Photos,
}

const Template = (args) => (
  <>
    <GlobalComponents />
    <Photos {...args} />
  </>
)

export const Primary = Template.bind({})
Primary.args = {
}