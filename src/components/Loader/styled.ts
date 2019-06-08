import styled, { keyframes } from 'styled-components'

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

const Circle = styled.circle`
  stroke: ${props => props.theme.colors.goal.create};
`

export { Svg, Circle }
