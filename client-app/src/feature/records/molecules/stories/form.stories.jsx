import React from "react";

import GlobalComponents from "../../../../shared/global-components"
import {Form} from "../form";

export default {
  title: 'Records/Molecules/Form',
  component: Form,
}

const Template = (args) => (
  <>
    <GlobalComponents />
    <Form {...args} />
  </>
)

export const Primary = Template.bind({})
Primary.args = {
}