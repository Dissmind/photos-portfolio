import React from "react";

import GlobalComponents from "../../../../shared/global-components"
import {FormInput} from "../form-input";

export default {
  title: 'Records/Atoms/FormInput',
  component: FormInput,
}

const Template = (args) => (
  <>
    <GlobalComponents />
    <FormInput {...args} />
  </>
)

export const Primary = Template.bind({})
Primary.args = {
}