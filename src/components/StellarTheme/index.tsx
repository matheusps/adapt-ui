import React, { FunctionComponent } from 'react'
import { ThemeProvider } from 'styled-components'

import { light } from './stockThemes'

/**
 * Wraps around Theme-provider from styled-components 💅🏻
 */
const StellarTheme: FunctionComponent<StellarThemeProps> = ({ children }) => {
  return (
    <ThemeProvider theme={light}>
      <>{children}</>
    </ThemeProvider>
  )
}

export default StellarTheme
