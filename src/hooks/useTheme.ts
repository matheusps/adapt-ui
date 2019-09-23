import { useContext } from 'react'
import { ThemeContext, DefaultTheme } from 'styled-components'

const useTheme = () => {
  const theme = useContext<DefaultTheme>(ThemeContext)

  return {
    ...theme,
  }
}

export { useTheme }
