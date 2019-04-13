import React, { FunctionComponent } from 'react'
import { ThemeProvider } from 'styled-components'

import { light } from './stockThemes'

/**
 * Wraps around Theme-provider from styled-components 💅🏻
 */
const QuarksTheme: FunctionComponent<QuarksThemeProps> = ({ children }) => {
  return (
    <ThemeProvider theme={light}>
      <>{children}</>
    </ThemeProvider>
  )
}

export default QuarksTheme
