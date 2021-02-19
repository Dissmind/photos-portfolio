import React from "react";

import Fonts from "../../../../attachments/font/fonts"
import {ToggleSwitch} from "./toggle-switch";


export default {
  title: 'ToggleSwitch',
  component: ToggleSwitch,
}

const Template = (args) => (
  <>
    <Fonts />
    <ToggleSwitch {...args} />
  </>
)

export const Primary = Template.bind({})
Primary.args = {

}