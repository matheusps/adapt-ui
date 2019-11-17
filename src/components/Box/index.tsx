import styled from 'styled-components'
import display, { DisplaySystem } from '../../tokenSystem/display'
import flex, { FlexSystem } from '../../tokenSystem/flexbox'
import position, { PositionSystem } from '../../tokenSystem/position'
import colors, { ColorSystem } from '../../tokenSystem/colors'
import spacing, { SpacingSystem } from '../../tokenSystem/spacing'
import elevations, { ElevationSystem } from '../../tokenSystem/elevation'

const Box = styled.div<BoxProps>`
  ${flex};
  ${display};
  ${position};
  ${colors};
  ${spacing};
  ${elevations};
  box-sizing: border-box;
`

export type BoxProps = FlexSystem &
  DisplaySystem &
  PositionSystem &
  ColorSystem &
  SpacingSystem &
  ElevationSystem

export default Box
