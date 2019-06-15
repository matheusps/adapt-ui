import React from 'react'
import { theme } from '../config'

const ThemeContext = React.createContext<ThemeProps>(theme)

const { Provider } = ThemeContext

export default ThemeContext
export { Provider as ThemeProvider }
