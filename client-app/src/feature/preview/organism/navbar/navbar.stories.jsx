import React from "react";

import GlobalComponents from "../../../../shared/global-components"
import {Navbar} from "./navbar";

export default {
  title: 'Home/Organism/Navbar',
  component: Navbar,
}

const Template = (args) => (
  <>
    <GlobalComponents />
    <Navbar {...args} />
  </>
)

export const Primary = Template.bind({})
Primary.args = {
}