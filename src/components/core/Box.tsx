import styled from 'styled-components'

const Box = styled.div<BoxProps>`
  ${({ width, height }) => `
    width: ${width};
    height: ${height};
  `};
  box-sizing: border-box;
`

export interface BoxProps {
  /** width in percentage or px */
  width?: string | number
  /** height in percentage or px */
  height?: string | number
}

export default Box
