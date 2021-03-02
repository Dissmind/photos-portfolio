import React from "react";

import GlobalComponents from "../../../../shared/global-components"
import {MainPhotoImg} from "../main-photo-img";

export default {
  title: 'About/Atoms/MainPhotoImg',
  component: MainPhotoImg,
}

const Template = (args) => (
  <>
    <GlobalComponents />
    <MainPhotoImg {...args} />
  </>
)

export const Primary = Template.bind({})
Primary.args = {
}