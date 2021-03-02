import React from "react";

import GlobalComponents from "../../../../shared/global-components"
import {ThemeSwitcher} from "../theme-switcher";

export default {
  title: 'Navbar/Molecules/ThemeSwitcher',
  component: ThemeSwitcher,
}

const Template = (args) => (
  <>
    <GlobalComponents />
    <ThemeSwitcher {...args} />
  </>
)

export const Primary = Template.bind({})
Primary.args = {
}