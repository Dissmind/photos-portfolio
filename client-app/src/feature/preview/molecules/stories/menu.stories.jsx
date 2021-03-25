import React from "react";

import {Menu} from "../menu";
import {GlobalStyle} from "../../../../shared/global-components"


export default {
  title: 'Home/Molecules/Menu',
  component: Menu,
}

const Template = (args) => (
  <>
    <GlobalStyle />
    <Menu {...args} />
  </>
)

export const Primary = Template.bind({})
Primary.args = {

}