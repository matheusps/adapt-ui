import React, { FC } from 'react'
import { ThemeProvider, DefaultTheme } from 'styled-components'

import { theme } from '../config'
import { GlobalStyle } from './GlobalStyle'

interface Props {
  theme?: DefaultTheme
}

/**
 * Wraps around Theme-provider from emotion 💅🏻
 *
 */
const AdaptProvider: FC<Props> = ({ theme, children }) => {
  return (
    <ThemeProvider theme={theme!}>
      <>
        <GlobalStyle />
        {children}
      </>
    </ThemeProvider>
  )
}

AdaptProvider.defaultProps = {
  theme: theme,
}

export default AdaptProvider
