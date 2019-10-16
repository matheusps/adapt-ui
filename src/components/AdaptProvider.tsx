import React, { FC } from 'react'
import { ThemeProvider, DefaultTheme } from 'styled-components'

import { theme } from '../config'
import GlobalStyle from './GlobalStyle'
import TypoPreflight from './Typography/Preflight'

interface Props {
  theme?: DefaultTheme
}

const AdaptProvider: FC<Props> = ({ theme, children }) => {
  return (
    <ThemeProvider theme={theme!}>
      <>
        <GlobalStyle />
        <TypoPreflight />
        {children}
      </>
    </ThemeProvider>
  )
}

AdaptProvider.defaultProps = {
  theme: theme,
}

export default AdaptProvider
