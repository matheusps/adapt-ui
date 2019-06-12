import styled, { keyframes } from 'styled-components'
import { get } from 'lodash'
import { getSkin } from '../../global/helpers'

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

export { Svg }
