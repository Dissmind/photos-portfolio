import React from "react";

import {GlobalStyle} from "../../../../../shared/global-components";
import {LanguageModal} from "../language-modal.mobile";

export default {
  title: 'Navbar/Organisms/LanguageModal',
  component: LanguageModal,
}

const Template = (args) => (
  <>
    <GlobalStyle />
    <LanguageModal {...args} />
  </>
)

export const Primary = Template.bind({})
Primary.args = {
}