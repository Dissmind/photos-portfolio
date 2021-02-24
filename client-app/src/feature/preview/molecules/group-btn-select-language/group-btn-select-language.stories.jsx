import React from "react";

import GlobalComponents from "../../../../shared/global-components"
import {GroupBtnSelectLanguage} from "./group-btn-select-language";

export default {
  title: 'Home/Molecules/GroupBtnSelectLanguage',
  component: GroupBtnSelectLanguage,
}

const Template = (args) => (
  <>
    <GlobalComponents />
    <GroupBtnSelectLanguage {...args} />
  </>
)

export const Primary = Template.bind({})
Primary.args = {
}