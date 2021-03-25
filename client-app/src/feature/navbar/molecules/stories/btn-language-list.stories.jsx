import React from "react";

import {GlobalStyle} from "../../../../shared/global-components"
import {BtnLanguageList} from "../btn-language-list";

export default {
  title: 'Navbar/Molecules/BtnLanguageList',
  component: BtnLanguageList,
}

const Template = (args) => (
  <>
    <GlobalStyle />
    <BtnLanguageList {...args} />
  </>
)

export const Primary = Template.bind({})
Primary.args = {
}