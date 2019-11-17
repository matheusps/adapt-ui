import { createTokens } from 'styled-tokens'

const draftSizes = {
  values: {
    none: '0rem',
    xs: '1rem',
    sm: '2rem',
    md: '4rem',
    lg: '16rem',
    xl: '32rem',
    xxl: '64rem',
    xxxl: '128rem',
    10: '10%',
    20: '20%',
    30: '30%',
    40: '40%',
    50: '50%',
    60: '60%',
    70: '70%',
    80: '80%',
    90: '90%',
    100: '100%',
    auto: 'auto',
  },
  propName: {
    width: 'w',
    height: 'h',
    maxWidth: 'maw',
    minWidth: 'miw',
    maxHeight: 'mah',
    minHeight: 'mih',
  },
}

type size = keyof typeof draftSizes.values

export type SizeSystem = Partial<{
  w: size
  h: size
  maw: size
  miw: size
  mah: size
  mih: size
}>

export default createTokens(draftSizes)
