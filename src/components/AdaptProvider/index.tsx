import React, { FC } from 'react'
import { ThemeProvider, DefaultTheme } from 'styled-components'

import { theme } from '../../config'
import GlobalPreflight from './GlobalPreflight'
import TypoPreflight from '../Typography/Preflight'

interface Props {
  theme?: DefaultTheme
}

const AdaptProvider: FC<Props> = ({ theme, children }) => {
  return (
    <ThemeProvider theme={theme!}>
      <>
        <GlobalPreflight />
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
