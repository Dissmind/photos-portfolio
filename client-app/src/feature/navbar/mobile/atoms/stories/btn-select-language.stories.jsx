import React from "react";

import {GlobalStyle} from "../../../../../shared/global-components";
import {BtnSelectLanguage} from "../btn-select-language";

export default {
  title: 'Navbar/Atoms/BtnSelectLanguage-M',
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