import { createTokens } from 'styled-tokens'

const draftElevations = {
  values: {
    none: 'none',
    xs: '0px 0px 4px 2px rgba( 0, 0, 0, 0.2 )',
    sm: '0px 0px 8px 2px rgba( 0, 0, 0, 0.2 )',
    md: '2px 2px 4px 2px rgba( 0, 0, 0, 0.2 )',
    lg: '2px 2px 8px 0px rgba( 0, 0, 0, 0.2 )',
    xl: '4px 4px 8px 0px rgba( 0, 0, 0, 0.2 )',
  },
  propName: {
    boxShadow: 'elevation',
  },
}

export type ElevationTokens = Partial<{
  elevation: keyof typeof draftElevations.values
}>

export default createTokens(draftElevations)
