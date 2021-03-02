import React from "react";

import GlobalComponents from "../../../../shared/global-components"
import {BtnLanguageList} from "../btn-language-list";

export default {
  title: 'Navbar/Molecules/BtnLanguageList',
  component: BtnLanguageList,
}

const Template = (args) => (
  <>
    <GlobalComponents />
    <BtnLanguageList {...args} />
  </>
)

export const Primary = Template.bind({})
Primary.args = {
}