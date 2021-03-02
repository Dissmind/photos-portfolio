import React from "react";

import GlobalComponents from "../../../../shared/global-components"
import {MainLabelText} from "./main-label-text";

export default {
  title: 'About/Atoms/MainLabelText',
  component: MainLabelText,
}

const Template = (args) => (
  <>
    <GlobalComponents />
    <MainLabelText {...args} />
  </>
)

export const Primary = Template.bind({})
Primary.args = {
  text: "Таким образом, повышение уровня гражданского сознания требует определения и уточнения ключевых компонентов планируемого обновления?"
}