import React from "react";

import {FormInput} from "../form-input";
import {GlobalStyle} from "../../../../../shared/global-components";

export default {
  title: 'Records/Atoms/FormInput',
  component: FormInput,
}

const Template = (args) => (
  <>
    <GlobalStyle />
    <FormInput {...args} />
  </>
)

export const Primary = Template.bind({})
Primary.args = {
}