import React from "react";

import {GlobalStyle} from "../../../../../shared/global-components"
import {BtnMore} from "../btn-more";

export default {
  title: 'Home/Atoms/BtnMore-M',
  component: BtnMore,
}

const Template = (args) => (
  <>
    <GlobalStyle />
    <BtnMore {...args} />
  </>
)

export const Primary = Template.bind({})
Primary.args = {
}