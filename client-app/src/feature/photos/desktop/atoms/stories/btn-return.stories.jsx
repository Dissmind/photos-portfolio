import React from "react";

import {GlobalStyle} from "../../../../../shared/global-components"
import {BtnReturn} from "../btn-return";

export default {
  title: 'Photos/Atoms/BtnReturn',
  component: BtnReturn,
}

const Template = (args) => (
  <>
    <GlobalStyle />
    <BtnReturn {...args} />
  </>
)

export const Primary = Template.bind({})
Primary.args = {
}