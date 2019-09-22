import React, { FC } from 'react'
import styled, { DefaultTheme } from 'styled-components'

import { getMeasure } from '../helpers'
import { Loader } from './Loader'
import Clickable from './core/Clickable'
import { useTheme } from '../hooks/useTheme'

const parseTheme = (theme: DefaultTheme) => {
  const buttonSizes = Object.keys(theme.button.sizes)
  return buttonSizes
}

const getFontSize = (measure: Measure): number =>
  getMeasure(measure, [0.8, 1, 1.25, 1.5])

const getPadding = (measure: Measure): string =>
  getMeasure(measure, [
    '0.375rem 1.4rem 0.375rem 1.4rem',
    '0.45rem 1.8rem 0.45rem 1.8rem',
    '0.65rem 2.2rem 0.65rem 2.2rem',
    '0.80rem 2.6rem 0.80rem 2.6rem',
  ])

const StyledClickable = styled(Clickable)<any>(({ fontSize, padding }) => ({
  fontSize,
  padding,
}))

const Button: FC<ButtonType> = ({ size, children, loading, ...props }) => {
  const fontSize = `${getFontSize(size!)}rem`
  const padding = getPadding(size!)
  const theme = useTheme()

  console.log(parseTheme(theme))
  return (
    <StyledClickable fontSize={fontSize} padding={padding} {...props}>
      {loading ? <Loader size={getFontSize(size!)} /> : children}
    </StyledClickable>
  )
}

Button.defaultProps = {
  size: 'md',
  loading: false,
}

export { Button }
