import React from "react";

import {GlobalStyle} from "../../../../../shared/global-components";
import {Footer} from "../footer";

export default {
  title: 'Footer/Organisms/Footer',
  component: Footer,
}

const Template = (args) => (
  <>
    <GlobalStyle />
    <Footer {...args} />
  </>
)

export const Primary = Template.bind({})
Primary.args = {
}