import React, { FunctionComponent } from 'react'
import styled from 'styled-components'

import { selectTheme, getMeasure } from '../../global/helpers'

interface Props extends EnhancedWithTheme {
  size?: Measure
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

const StyledButton = styled.button<Props>`
  background-color: ${props =>
    selectTheme(props.theme, props.color, props.shade)};
  color: ${props => selectTheme(props.theme, props.color, 'contrast')};
  font-size: ${props => getFontSize(props.size!)};
  padding: ${props => getPadding(props.size!)};

  font-weight: 500;
  line-height: 1.3;

  margin: 10px;

  display: flex;
  overflow: hidden;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  text-transform: none;
  white-space: nowrap;
  border: 0 none;
  border-radius: 4px;
  justify-content: center;
  align-items: center;

  transition: all 150ms linear;

  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  :hover {
    transition: all 150ms linear;
    opacity: 0.85;
  }

  :active {
    transition: all 150ms linear;
    opacity: 0.75;
  }

  :focus {
    outline: none;
  }
`

const Button: FunctionComponent<Props> = ({
  children,
  size,
  color,
  ...props
}) => {
  return (
    <StyledButton size={size} color={color} {...props}>
      {children}
    </StyledButton>
  )
}

Button.defaultProps = {
  color: 'primary',
  shade: 'default',
  size: 'md',
}

export default Button
