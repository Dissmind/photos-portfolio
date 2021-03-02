import React from "react";

import {Menu} from "../menu";
import GlobalComponents from "../../../../shared/global-components"


export default {
  title: 'Home/Molecules/Menu',
  component: Menu,
}

const Template = (args) => (
  <>
    <GlobalComponents />
    <Menu {...args} />
  </>
)

export const Primary = Template.bind({})
Primary.args = {

}