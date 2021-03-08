import React from "react";

import GlobalComponents from "../../../../shared/global-components"
import {PortfolioLabelArrow} from "../portfolio-label-arrow";

export default {
  title: 'Portfolio/Atoms/LabelArrow',
  component: PortfolioLabelArrow,
}

const Template = (args) => (
  <>
    <GlobalComponents />
    <PortfolioLabelArrow {...args} />
  </>
)

export const Primary = Template.bind({})
Primary.args = {
  text: "test-text"
}