import React from "react";

import Fonts from "../../../../attachments/font/fonts";
import {ThemeSwitcher} from "./theme-switcher";

export default {
  title: 'ThemeSwitcher',
  component: ThemeSwitcher,
}

const Template = (args) => (
  <>
    <Fonts />
    <ThemeSwitcher {...args} />
  </>
)

export const Primary = Template.bind({})
Primary.args = {

}