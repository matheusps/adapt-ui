import styled from 'styled-components'
import display, { DisplaySystem } from '../../tokenSystem/display'
import flex, { FlexSystem } from '../../tokenSystem/flexbox'
import position, { PositionSystem } from '../../tokenSystem/position'

const Box = styled.div<BoxProps>`
  ${flex};
  ${display};
  ${position}
  box-sizing: border-box;
`

export type BoxProps = FlexSystem & DisplaySystem & PositionSystem

export default Box
