import { createVariation } from 'styled-tokens'

const name = 'scroll'

const variation = {
  none: {
    overflowX: 'hidden',
    overflowY: 'hidden',
  },
  x: {
    overflowX: 'scroll',
    overflowY: 'hidden',
  },
  y: {
    overflowX: 'hidden',
    overflowY: 'scroll',
  },
  xy: {
    overflowX: 'scroll',
    overflowY: 'scroll',
  },
}

export type ScrollVariation = Partial<{
  [name]: keyof typeof variation
}>

export default createVariation({ name, variation })
