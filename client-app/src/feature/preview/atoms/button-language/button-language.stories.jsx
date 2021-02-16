import React from "react";

import {ButtonLanguage} from "./button-language";

export default {
  title: 'ButtonLanguage',
  component: ButtonLanguage,
}

const Template = (args) => <ButtonLanguage {...args} />

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