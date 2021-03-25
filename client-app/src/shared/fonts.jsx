import LemonTuesday from "../attachments/font/Lemon-Tuesday.woff2"
import PentaLight from "../attachments/font/PentaLight.woff2"
import Solena from "../attachments/font/Solena-Regular.woff2"

export const Fonts = `
  @font-face {
    font-family: 'Lemon Tuesday';
    src: local('Lemon Tuesday'), local('LemonTuesday'),
    url(${LemonTuesday}) format('woff2');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'PentaLight';
    src: local('Penta Light'), local('PentaLight'),
    url(${PentaLight}) format('woff2');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'Solena';
    src: local('Solena Regular'), local('SolenaRegular'), local('Solena'),
    url(${Solena}) format('woff2');
    font-weight: 400;
    font-style: normal;
  }
`