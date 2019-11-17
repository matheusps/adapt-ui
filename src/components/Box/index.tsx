import styled from 'styled-components'
import { createVariation } from 'styled-tokens'
import {
  displayTokens,
  flexboxTokens,
  positionTokens,
  colorTokens,
  spacingTokens,
  elevationTokens,
  DisplayTokens,
  FlexTokens,
  PositionTokens,
  ColorTokens,
  SpacingTokens,
  ElevationTokens,
} from '../../tokens'

const variation = {
  primary: {
    backgroundColor: 'blue',
    color: 'green',
  },
  secondary: {
    backgroundColor: 'aqua',
    color: 'pink',
  },
}

const theme = createVariation({ variation, name: 'themeTest' })

type ThemeVariation = {
  themeTest?: keyof typeof variation
}

const Box = styled.div<BoxProps>`
  ${flexboxTokens};
  ${displayTokens};
  ${positionTokens};
  ${colorTokens};
  ${spacingTokens};
  ${elevationTokens};
  ${theme}
  box-sizing: border-box;
`

export type BoxProps = FlexTokens &
  DisplayTokens &
  PositionTokens &
  ColorTokens &
  SpacingTokens &
  ElevationTokens &
  ThemeVariation

export default Box
