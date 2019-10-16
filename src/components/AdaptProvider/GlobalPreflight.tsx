import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  
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
    overflow-x: hidden;
    /*background-color: rgb(16, 16, 28) ;*/
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    padding: 0;
    margin: 0;
  }

  main {
    display: block;
  }

  hr {
    box-sizing: content-box; 
    height: 0; 
    overflow: visible; 
  }

  a {
    background-color: transparent;
  }

  abbr[title] {
    border-bottom: none;
  }

  sub,
  sup {
    position: relative;
    vertical-align: baseline;
  }

  sub {
    bottom: -0.25em;
  }

  sup {
    top: -0.5em;
  }

  img {
    border-style: none;
  }

  button,
  input,
  optgroup,
  select,
  textarea {
    margin: 0; 
  }

  button,
  input { 
    overflow: visible;
  }

  button,
  [type="button"],
  [type="reset"],
  [type="submit"] {
    -webkit-appearance: button;
  }

  button::-moz-focus-inner,
  [type="button"]::-moz-focus-inner,
  [type="reset"]::-moz-focus-inner,
  [type="submit"]::-moz-focus-inner {
    border-style: none;
    padding: 0;
  }

  button:-moz-focusring,
  [type="button"]:-moz-focusring,
  [type="reset"]:-moz-focusring,
  [type="submit"]:-moz-focusring {
    outline: 1px dotted ButtonText;
  }

  fieldset {
    padding: 0.35em 0.75em 0.625em;
  }

  legend {
    box-sizing: border-box;
    color: inherit; 
    display: table; 
    max-width: 100%; 
    padding: 0; 
    white-space: normal; 
  }

  progress {
    vertical-align: baseline;
  }

  textarea {
    overflow: auto;
  }

  [type="checkbox"],
  [type="radio"] {
    box-sizing: border-box; 
    padding: 0; 
  }

  [type="number"]::-webkit-inner-spin-button,
  [type="number"]::-webkit-outer-spin-button {
    height: auto;
  }

  [type="search"] {
    -webkit-appearance: textfield;
    outline-offset: -2px; 
  }

  [type="search"]::-webkit-search-decoration {
    -webkit-appearance: none;
  }

  ::-webkit-file-upload-button {
    -webkit-appearance: button; 
  }

  details {
    display: block;
  }

  summary {
    display: list-item;
  }

  template {
    display: none;
  }


  [hidden] {
    display: none;
  }
`

export default GlobalStyle
