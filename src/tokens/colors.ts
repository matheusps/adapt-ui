import { createTokens } from 'styled-tokens'

const draftColors = {
  values: {
    navy: '#001f3f',
    blue: '#0074D9',
    aqua: '#7FDBFF',
    teal: '#39CCCC',
    olive: '#39CCCC',
    green: '#2ECC40',
    lime: '#01FF70',
    yellow: '#FFDC00',
    orange: '#FF851B',
    red: '#FF4136',
    maroon: '#85144b',
    fuchsia: '#F012BE',
    purple: '#B10DC9',
    black: '#111111',
    gray: '#AAAAAA',
    silver: '#DDDDDD',
    white: '#FFFFFF',
  },
  propName: {
    color: 'color',
    backgroundColor: 'bgColor',
    borderColor: 'bColor',
  },
}

export type ColorTokens = Partial<{
  color: keyof typeof draftColors.values
  bgColor: keyof typeof draftColors.values
  bColor: keyof typeof draftColors.values
}>

export default createTokens(draftColors)
