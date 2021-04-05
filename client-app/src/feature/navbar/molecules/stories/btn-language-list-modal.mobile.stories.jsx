import React from "react";

import {GlobalStyle} from "../../../../shared/global-components";
import {BtnLanguageListModal} from "../btn-language-list-modal.mobile";

export default {
  title: 'Navbar/Molecules/BtnLanguageListModal',
  component: BtnLanguageListModal,
}

const Template = (args) => (
  <>
    <GlobalStyle />
    <BtnLanguageListModal {...args} />
  </>
)

export const Primary = Template.bind({})
Primary.args = {
}