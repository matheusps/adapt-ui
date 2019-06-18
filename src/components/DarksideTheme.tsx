import React, { FunctionComponent } from 'react'
import { ThemeProvider } from 'styled-components'

import { GlobalStyles } from './GobalStyles'
import { theme } from '../config'

interface Props {
  theme?: ThemeProps
}

/**
 * Wraps around Theme-provider from emotion 💅🏻
 */
const DarksideTheme: FunctionComponent<Props> = ({ theme, children }) => {
  return (
    <ThemeProvider theme={theme!}>
      <>
        <GlobalStyles />
        {children}
      </>
    </ThemeProvider>
  )
}

DarksideTheme.defaultProps = {
  theme: theme,
}

export { DarksideTheme }
