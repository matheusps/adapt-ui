import React, { FunctionComponent } from 'react'
import { ThemeProvider } from 'emotion-theming'

import GlobalStyles from './GobalStyles'
import { darkside } from './theme'

interface Props {
  theme?: ThemeProps
}

/**
 * Wraps around Theme-provider from emotion 💅🏻
 */
const QuarksTheme: FunctionComponent<Props> = ({ theme, children }) => {
  return (
    <ThemeProvider theme={theme!}>
      <>
        <GlobalStyles />
        {children}
      </>
    </ThemeProvider>
  )
}

QuarksTheme.defaultProps = {
  theme: darkside,
}

export default QuarksTheme
