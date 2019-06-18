import { useContext } from 'react'
import { ThemeContext } from 'styled-components'

const useTheme = () => {
  const theme = useContext<ThemeProps>(ThemeContext)

  return {
    ...theme,
  }
}

export { useTheme }
