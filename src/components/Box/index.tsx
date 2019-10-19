import styled from 'styled-components'
import { spacingSystem, SpacingSystem } from '../../tokenSystem/spacing.system'
import { sizeSystem, SizeSystem } from '../../tokenSystem/size.system'

const Box = styled.div<BoxProps>`
  ${spacingSystem}
  ${sizeSystem}
  box-sizing: border-box;
`

export type BoxProps = SpacingSystem & SizeSystem

export default Box
