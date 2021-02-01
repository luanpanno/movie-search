import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';
import 'react-toggle/style.css'; // for ES6 modules

import { Reset } from './Reset';

export const GlobalStyles = createGlobalStyle`
  ${Reset}

html, body {
  width: 100%;
  height: 100%;

  &, *{
    font-family: 'Oswald', sans-serif;
    box-sizing: border-box;
    outline: 0;
  }
}

@media print {
  *, ::after, ::before {
      color: #000 !important;
      text-shadow: none !important;
      background: 0 0 !important;
      -webkit-box-shadow: none !important;
      box-shadow: none !important;
  }
}

`;
export default GlobalStyles;
