import React, { FunctionComponent } from 'react'
import { ThemeProvider } from 'styled-components'

import { light } from './stockThemes'

interface Props {
  theme: ThemeProps
}

/**
 * Wraps around Theme-provider from styled-components 💅🏻
 */
const QuarksTheme: FunctionComponent<Props> = ({ theme, children }) => {
  return (
    <ThemeProvider theme={theme}>
      <>{children}</>
    </ThemeProvider>
  )
}

QuarksTheme.defaultProps = {
  theme: light,
}

export default QuarksTheme
