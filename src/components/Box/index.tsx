import styled from 'styled-components'
import display, { DisplaySystem } from '../../tokenSystem/display'
import flex, { FlexSystem } from '../../tokenSystem/flexbox'
import position, { PositionSystem } from '../../tokenSystem/position'
import colors, { ColorSystem } from '../../tokenSystem/colors'

const Box = styled.div<BoxProps>`
  ${flex};
  ${display};
  ${position};
  ${colors};
  box-sizing: border-box;
`

export type BoxProps = FlexSystem & DisplaySystem & PositionSystem & ColorSystem

export default Box
