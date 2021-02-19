import React from "react";

import Fonts from "../../../../attachments/font/fonts"
import {ThemeIcons} from "./theme-icons";

import Moon from "../../../../attachments/icon/BlackThemeMoonIco.svg"
import Sun from "../../../../attachments/icon/WhiteThemeSunIco.svg"

export default {
  title: 'ThemeIcons',
  component: ThemeIcons,
}

const Template = (args) => (
  <>
    <Fonts />
    <ThemeIcons {...args} />
  </>
)

export const Black = Template.bind({})
Black.args = {
  path: `${Moon}`,
}

export const White = Template.bind({})
White.args = {
  path: `${Sun}`,
}