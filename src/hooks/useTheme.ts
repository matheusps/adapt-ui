import { useContext } from 'react'
import ThemeContext from '../context/Theme'

const objectMap = (object: Object, mapFn: (value: any) => any) =>
  Object.keys(object).reduce((result, key) => {
    result[key] = mapFn(object[key])
    return result
  }, {})

const useTheme = () => {
  const theme = useContext(ThemeContext)

  return {
    ...theme,
  }
}

export default useTheme
