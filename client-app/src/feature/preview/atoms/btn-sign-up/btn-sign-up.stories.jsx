import React from "react";

import GlobalComponents from "../../../../shared/global-components"
import {BtnSignUp} from "./btn-sign-up";

export default {
  title: 'Home/Atoms/BtnSignUp',
  component: BtnSignUp,
}

const Template = (args) => (
  <>
    <GlobalComponents />
    <BtnSignUp {...args} />
  </>
)

export const Primary = Template.bind({})
Primary.args = {
}