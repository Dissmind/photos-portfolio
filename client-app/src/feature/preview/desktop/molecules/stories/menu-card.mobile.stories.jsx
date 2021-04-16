import React from "react";

import {GlobalStyle} from "../../../../../shared/global-components"
import {MenuCard} from "../menu-card.mobile";

export default {
  title: 'Home/Molecules/MenuCard',
  component: MenuCard,
}

const Template = (args) => (
  <>
    <GlobalStyle />
    <MenuCard {...args} />
  </>
)

export const Primary = Template.bind({})
Primary.args = {
  title: 'Test'
}