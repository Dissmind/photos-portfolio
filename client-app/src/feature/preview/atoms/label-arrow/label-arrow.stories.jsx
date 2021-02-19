import React from "react";

import Fonts from "../../../../attachments/font/fonts"
import {LabelArrow} from "./label-arrow";

export default {
  title: 'LabelArrow',
  component: LabelArrow,
}

const Template = (args) => (
  <>
    <Fonts />
    <LabelArrow {...args} />
  </>
)

export const Primary = Template.bind({})
Primary.args = {
  text: "Выберите свой язык!",
}