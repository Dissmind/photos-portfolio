import React from "react";

import {GlobalStyle} from "../../../../shared/global-components"
import {ToggleSwitch} from "../toggle-switch";


export default {
  title: 'Navbar/Atoms/ToggleSwitch',
  component: ToggleSwitch,
}

const Template = (args) => (
  <>
    <GlobalStyle />
    <ToggleSwitch {...args} />
  </>
)

export const Primary = Template.bind({})
Primary.args = {

}