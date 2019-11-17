import { createTokens } from 'styled-tokens'

const draftSpacing = {
  values: {
    none: '0rem',
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '2rem',
    xl: '4rem',
    xxl: '8rem',
    xxxl: '16rem',
  },
  propName: {
    margin: 'ma',
    marginTop: 'mt',
    marginRight: 'mr',
    marginBottom: 'mb',
    marginLeft: 'ml',
    padding: 'pa',
    paddingTop: 'pt',
    paddingRight: 'pr',
    paddingBottom: 'pb',
    paddingLeft: 'pl',
  },
}

type spacing = keyof typeof draftSpacing.values

export type SpacingSystem = Partial<{
  ma: spacing
  mt: spacing
  mr: spacing
  mb: spacing
  ml: spacing
  pa: spacing
  pt: spacing
  pr: spacing
  pb: spacing
  pl: spacing
}>

export default createTokens(draftSpacing)
