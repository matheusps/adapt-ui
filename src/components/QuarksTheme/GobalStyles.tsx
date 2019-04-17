import { createGlobalStyle } from 'styled-components'

/** HKGrotesk */
import FontLight from './font/light.woff'
import FontLight2 from './font/light.woff2'
import FontRegular from './font/regular.woff'
import FontRegular2 from './font/regular.woff2'
import FontMedium from './font/medium.woff'
import FontMedium2 from './font/medium.woff2'
import FontSemibold from './font/semiBold.woff'
import FontSemibold2 from './font/semiBold.woff2'
import FontBold from './font/bold.woff'
import FontBold2 from './font/bold.woff2'

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: HkGrotesk;
    src: url(${FontLight}) format('woff'),
         url(${FontLight2}) format('woff2');
    font-weight: 300;
  }

  @font-face {
    font-family: HkGrotesk;
    src: url(${FontRegular}) format('woff'),
         url(${FontRegular2}) format('woff2');
    font-weight: 400;
  }

  @font-face {
    font-family: HkGrotesk;
    src: url(${FontMedium}) format('woff'),
         url(${FontMedium2}) format('woff2');
    font-weight: 500;
  }

  @font-face {
    font-family: HkGrotesk;
    src: url(${FontSemibold}) format('woff'),
         url(${FontSemibold2}) format('woff2');
    font-weight: 600;
  }

  @font-face {
    font-family: HkGrotesk;
    src: url(${FontBold}) format('woff'),
         url(${FontBold2}) format('woff2');
    font-weight: 800;
  }
  
  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  html {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: HkGrotesk, sans-serif;
    overflow-x: hidden;
    text-rendering: optimizeLegibility;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    font-variant-ligatures: no-common-ligatures;
    padding: 0;
    margin: 0;
  }

  h1, h2, h3, h4, h5, h6, p, button, input { 
    font-family: HkGrotesk, sans-serif;
  }
`
export default GlobalStyles
