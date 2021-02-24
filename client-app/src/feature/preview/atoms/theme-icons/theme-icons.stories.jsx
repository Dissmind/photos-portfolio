import React from "react";

import GlobalComponents from "../../../../shared/global-components"
import {ThemeIcons} from "./theme-icons";

import Moon from "../../../../attachments/icon/BlackThemeMoonIco.svg"
import Sun from "../../../../attachments/icon/WhiteThemeSunIco.svg"

export default {
  title: 'Home/Atoms/ThemeIcons',
  component: ThemeIcons,
}

const Template = (args) => (
  <>
    <GlobalComponents />
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