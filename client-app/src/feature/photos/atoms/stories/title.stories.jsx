import React from "react";

import GlobalComponents from "../../../../shared/global-components"
import {Title} from "../title";

export default {
  title: 'Photos/Atoms/TitleStories',
  component: Title,
}

const Template = (args) => (
  <>
    <GlobalComponents />
    <Title {...args} />
  </>
)

export const Primary = Template.bind({})
Primary.args = {
}