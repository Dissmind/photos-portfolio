import React from "react";

import {GlobalStyle} from "../../../../../shared/global-components";
import {BtnSend} from "../btn-send";

export default {
  title: 'Records/Atoms/BtnSend',
  component: BtnSend,
}

const Template = (args) => (
  <>
    <GlobalStyle />
    <BtnSend {...args} />
  </>
)

export const Primary = Template.bind({})
Primary.args = {
}