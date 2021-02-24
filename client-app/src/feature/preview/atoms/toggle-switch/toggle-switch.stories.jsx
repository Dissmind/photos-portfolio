import React from "react";

import GlobalComponents from "../../../../shared/global-components"
import {ToggleSwitch} from "./toggle-switch";


export default {
  title: 'Home/Atoms/ToggleSwitch',
  component: ToggleSwitch,
}

const Template = (args) => (
  <>
    <GlobalComponents />
    <ToggleSwitch {...args} />
  </>
)

export const Primary = Template.bind({})
Primary.args = {

}