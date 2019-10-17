import styled from 'styled-components'
import styleComposer from '../../styleComposer'

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

const defaultSizes = {
  scale: {
    sm: '50%',
    md: '2rem',
    lg: '3rem',
  },
  propName: {
    width: 'width',
    height: 'height',
  },
}

const spacing = styleComposer(defaultSpacing) as Spacing
const sizes = styleComposer(defaultSizes) as Sizes

const Box = styled.div<BoxProps>`
  ${spacing}
  ${sizes}
  box-sizing: border-box;
`

type Scale = 'sm' | 'md' | 'lg'
type Spacing = {
  m?: Scale
  mt?: Scale
  mr?: Scale
  mb?: Scale
  ml?: Scale
  p?: Scale
  pt?: Scale
  pr?: Scale
  pb?: Scale
  pl?: Scale
}

type Sizes = {
  height?: Scale
  width?: Scale
}

export type BoxProps = Spacing & Sizes

export default Box
