import { createTokens } from 'styled-tokens'

const align = {
  values: {
    left: 'left',
    center: 'center',
    right: 'right',
    justify: 'justify',
  },
  propName: {
    textAlign: 'ta',
  },
}

const transform = {
  values: {
    none: 'none',
    capital: 'capitalize',
    lower: 'lowercase',
    upper: 'uppercase',
  },
  propName: {
    textTransform: 'tt',
  },
}

const decoration = {
  values: {
    none: 'none',
    underline: 'underline',
    strike: 'line-throught',
  },
  propName: {
    textDecoration: 'td',
  },
}

export type TextTokens = Partial<{
  ta: keyof typeof align.values
  tt: keyof typeof transform.values
  td: keyof typeof decoration.values
}>

export default [align, transform, decoration].map(createTokens)
