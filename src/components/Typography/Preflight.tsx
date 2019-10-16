import { createGlobalStyle } from 'styled-components'

const TypoPreflight = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Source+Code+Pro:500|Source+Sans+Pro:400,600,700|Work+Sans:400,500,700&display=swap');

  h1, h2, h3, h4, h5, h6 { 
    font-family: 'Work Sans', sans-serif;
    line-height: 1.15; 
  }

  html {
    line-height: 1.15; 
    -webkit-text-size-adjust: 100%;
  }

  body, p, button, input, a  {
    font-family: 'Source Sans Pro', sans-serif;
    text-rendering: optimizeLegibility;
  }

  pre {
    font-family: 'Source Code Pro', monospace; 
    font-size: 1em; 
  }

  abbr[title] {
    text-decoration: underline; 
    text-decoration: underline dotted; 
  }

  b,
  strong {
    font-weight: bolder;
  }

  code,
  kbd,
  samp {
    font-family: 'Source Code Pro', monospace;
    font-size: 1em; 
  }

  small {
    font-size: 80%;
  }

  sub,
  sup {
    font-size: 75%;
    line-height: 0;
  }

  button,
  select {
    text-transform: none;
  }

  button,
  input,
  optgroup,
  select,
  textarea {
    font-family: inherit; 
    font-size: 100%; 
    line-height: 1.15; 
  }

  ::-webkit-file-upload-button {
    font: inherit; 
  }

`

export default TypoPreflight
