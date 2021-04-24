import React from "react";

import {GlobalStyle} from "../../../../../shared/global-components"
import {Title} from "../title";

export default {
  title: 'Photos/Atoms/TitleStories',
  component: Title,
}

const Template = (args) => (
  <>
    <GlobalStyle />
    <Title {...args} />
  </>
)

export const Primary = Template.bind({})
Primary.args = {
}