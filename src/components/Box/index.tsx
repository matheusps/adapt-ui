import styled from 'styled-components'
import { spacingTokens, SpacingTokens } from '../../tokenSystem/spacing.tokens'
import { sizeTokens, SizeTokens } from '../../tokenSystem/size.tokens'

const Box = styled.div<BoxProps>`
  ${spacingTokens}
  ${sizeTokens}
  box-sizing: border-box;
`

export type BoxProps = SpacingTokens & SizeTokens

export default Box
