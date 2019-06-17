import React from 'react'
import { theme } from '../config'

const ThemeContext = React.createContext<ThemeProps>(theme)

const { Provider } = ThemeContext

export { ThemeContext, Provider as ThemeProvider }
