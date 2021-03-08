import React from "react";

import GlobalComponents from "../../../../shared/global-components"
import {BtnReturn} from "../btn-return";

export default {
  title: 'Photos/Atoms/BtnReturn',
  component: BtnReturn,
}

const Template = (args) => (
  <>
    <GlobalComponents />
    <BtnReturn {...args} />
  </>
)

export const Primary = Template.bind({})
Primary.args = {
}