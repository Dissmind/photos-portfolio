import React from "react";

import {GlobalStyle} from "../../../../../shared/global-components"
import {Form} from "../form";

export default {
  title: 'Records/Molecules/Form',
  component: Form,
}

const Template = (args) => (
  <>
    <GlobalStyle />
    <Form {...args} />
  </>
)

export const Primary = Template.bind({})
Primary.args = {
}