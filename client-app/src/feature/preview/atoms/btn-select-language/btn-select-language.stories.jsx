import React from "react";

import GlobalComponents from "../../../../shared/global-components"
import {BtnSelectLanguage} from "./btn-select-language";

export default {
  title: 'Home/Atoms/BtnSelectLanguage',
  component: BtnSelectLanguage,
}

const Template = (args) => (
  <>
    <GlobalComponents />
    <BtnSelectLanguage {...args} />
  </>
)

export const Eng = Template.bind({})
Eng.args = {
  text: "eng",
}

export const Pol = Template.bind({})
Pol.args = {
  text: "pol",
}

export const Rus = Template.bind({})
Rus.args = {
  text: "рус",
}