import React from "react";

import {GlobalStyle} from "../../../../../shared/global-components"
import {BtnLanguage} from "../btn-language";

export default {
  title: 'Navbar/Atoms/BtnLanguage',
  component: BtnLanguage,
}

const Template = (args) => (
  <>
    <GlobalStyle />
    <BtnLanguage {...args} />
  </>
)

export const Primary = Template.bind({})
Primary.args = {
  text: "рус"
}