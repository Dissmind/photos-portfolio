import React from "react";

import GlobalComponents from "../../../../shared/global-components"
import {Records} from "../records";

export default {
  title: 'Records/Pages/Records',
  component: Records,
}

const Template = (args) => (
  <>
    <GlobalComponents />
    <Records {...args} />
  </>
)

export const Primary = Template.bind({})
Primary.args = {
}