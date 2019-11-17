import styled from 'styled-components'
import display, { DisplaySystem } from '../../tokenSystem/display'
import flex, { FlexSystem } from '../../tokenSystem/flexbox'

const Box = styled.div<BoxProps>`
  ${flex};
  ${display};
  box-sizing: border-box;
`

export type BoxProps = FlexSystem & DisplaySystem

export default Box
