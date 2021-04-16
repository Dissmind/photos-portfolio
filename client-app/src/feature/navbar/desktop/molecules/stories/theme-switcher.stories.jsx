import React from "react";

import {GlobalStyle} from "../../../../../shared/global-components"
import {ThemeSwitcher} from "../theme-switcher";

export default {
  title: 'Navbar/Molecules/ThemeSwitcher',
  component: ThemeSwitcher,
}

const Template = (args) => (
  <>
    <GlobalStyle />
    <ThemeSwitcher {...args} />
  </>
)

export const Primary = Template.bind({})
Primary.args = {
}