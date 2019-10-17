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
    width: 'w',
    height: 'h',
  },
}

const spacing = styleComposer(defaultSpacing)
const sizes = styleComposer(defaultSizes)

const Box = styled.div<any>`
  ${({ width, height }) => `
    width: ${width};
    height: ${height};
  `};
  ${spacing}
  ${sizes}
  box-sizing: border-box;
`

export interface BoxProps {
  /** width in percentage or px */
  width?: string | number
  /** height in percentage or px */
  height?: string | number
}

export default Box
