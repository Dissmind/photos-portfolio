import React from "react";

import {GlobalStyle} from "../../../../shared/global-components";
import {Description} from "../description";

export default {
  title: 'Footer/Atoms/Description',
  component: Description,
}

const Template = (args) => (
  <>
    <GlobalStyle />
    <Description {...args} />
  </>
)

export const Primary = Template.bind({})
Primary.args = {
}