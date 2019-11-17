import { createTokens } from 'styled-tokens'

const direction = {
  values: {
    row: 'row',
    'row--r': 'row-reverse',
    col: 'column',
    'col--r': 'column-reverse',
  },
  propName: {
    flexDirection: 'direction',
  },
}

export type FlexSystem = Partial<{
  direction: keyof typeof direction.values
}>

export default createTokens(direction)
