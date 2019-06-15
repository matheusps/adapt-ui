import React from 'react'
import { darkside } from '../components/QuarksTheme/theme'

const ThemeContext = React.createContext<ThemeProps>(darkside)

const { Provider } = ThemeContext

export default ThemeContext
export { Provider as ThemeProvider }
