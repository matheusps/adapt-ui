import tokenBuilder from './index'

const defaultSpacing = {
  scale: {
    sm: '5rem',
    md: '2rem',
    lg: '3rem',
  },
  propName: {
    margin: 'm',
    marginTop: 'mt',
    marginRight: 'mr',
    marginBottom: 'mb',
    marginLeft: 'ml',
    padding: 'p',
    paddingTop: 'pt',
    paddingRight: 'pr',
    paddingBottom: 'pb',
    paddingLeft: 'pl',
  },
}

export const spacingSystem = tokenBuilder(defaultSpacing) as SpacingSystem

export type SpacingScale = 'sm' | 'md' | 'lg'

export type SpacingSystem = {
  m?: SpacingScale
  mt?: SpacingScale
  mr?: SpacingScale
  mb?: SpacingScale
  ml?: SpacingScale
  p?: SpacingScale
  pt?: SpacingScale
  pr?: SpacingScale
  pb?: SpacingScale
  pl?: SpacingScale
}
