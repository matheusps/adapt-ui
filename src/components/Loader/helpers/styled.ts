import styled, { keyframes } from 'styled-components'

import { selectTheme } from '../../../global/helpers'

const infiniteSpin = keyframes`
  from {transform: rotate(0deg)}
  to {transform: rotate(360deg)}
`

const Svg = styled.svg`
  transition-property: transform;
  animation-name: ${infiniteSpin};
  animation-iteration-count: infinite;
  animation-timing-function: linear;
`

const Circle = styled.circle<EnhancedWithTheme>`
  stroke: ${props => selectTheme(props.theme, props.color, props.shade)};
`

/** @component */
export { Svg, Circle }
