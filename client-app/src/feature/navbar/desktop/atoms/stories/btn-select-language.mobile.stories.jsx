import React from "react";

import {GlobalStyle} from "../../../../../shared/global-components";
import {BtnSelectLanguage} from "../btn-select-language.mobile";

export default {
  title: 'Navbar/Atoms/BtnSelectLanguage',
  component: BtnSelectLanguage,
}

const Template = (args) => (
  <>
    <GlobalStyle />
    <BtnSelectLanguage {...args} />
  </>
)

export const Primary = Template.bind({})
Primary.args = {
}