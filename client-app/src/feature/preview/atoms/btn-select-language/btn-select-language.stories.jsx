import React from "react";

import Fonts from "../../../../attachments/font/fonts"
import {BtnSelectLanguage} from "./btn-select-language";

export default {
  title: 'BtnSelectLanguage',
  component: BtnSelectLanguage,
}

const Template = (args) => (
  <>
    <Fonts />
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