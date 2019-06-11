import { get } from 'lodash'
import styled from 'styled-components'

import {
  getMeasure,
  lightenOrDarken,
  isBrightColor,
} from '../../global/helpers'

interface Props extends withGoal {
  size?: Measure
  kind?: 'link' | 'ghost' | 'default'
}

const getFontSize = (measure: Measure) =>
  getMeasure(measure, ['0.8rem', '1rem', '1.25rem', '1.50rem'])

const getPadding = (measure: Measure) =>
  getMeasure(measure, [
    '0.375rem 1.4rem 0.375rem 1.4rem',
    '0.45rem 1.8rem 0.45rem 1.8rem',
    '0.65rem 2.2rem 0.65rem 2.2rem',
    '0.80rem 2.6rem 0.80rem 2.6rem',
  ])

const Button = styled.button<Props>`
  background-color: ${({ kind, theme, goal }) =>
    kind === 'ghost' || kind === 'link'
      ? 'transparent'
      : get(theme.colors.goal, goal)};
  color: ${({ kind, theme, goal }) =>
    kind === 'ghost' || kind === 'link'
      ? get(theme.colors.goal, goal)
      : isBrightColor(get(theme.colors.goal, goal))
      ? '#000'
      : '#fff'};
  font-size: ${props => getFontSize(props.size!)};
  padding: ${props => getPadding(props.size!)};
  border-radius: ${({ theme }) => theme.elements.roundness};
  border: none;

  box-sizing: border-box;

  font-weight: 500;
  font-stretch: normal;
  line-height: 1.4;
  margin: 0.2rem;
  display: relative;
  overflow: hidden;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  text-transform: none;
  white-space: nowrap;
  justify-content: center;
  align-items: center;

  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  transition: background-color 0.2s ease-in-out;
  will-change: background-color;

  :hover {
    background-color: ${props =>
      lightenOrDarken(get(props.theme.colors.goal, props.goal), -20)};
  }

  :active {
    background-color: ${props =>
      lightenOrDarken(get(props.theme.colors.goal, props.goal), -40)};
  }

  :focus {
    outline: none;
  }
`

Button.defaultProps = {
  goal: 'create',
  size: 'md',
  kind: 'default',
}

export default Button
