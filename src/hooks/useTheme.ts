import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'

const useTheme = () => {
  const theme = useContext(ThemeContext)

  return {
    ...theme,
  }
}

export { useTheme }
