import { DefaultTheme } from 'styled-components'

export const theme: DefaultTheme = {
  fonts: {
    heading: "'Work Sans', sans-serif",
    body: "'Source Sans Pro', sans-serif",
    code: "'Source Code Pro', monospace",
  },
  button: {
    sizes: {
      sm: {
        fontSize: '0.8rem',
        padding: '0.375rem 1.4rem 0.375rem 1.4rem',
      },
      md: {
        fontSize: '1rem',
        padding: '0.45rem 1.8rem 0.45rem 1.8rem',
      },
      lg: {
        fontSize: '1.25rem',
        padding: '0.65rem 2.2rem 0.65rem 2.2rem',
      },
      xl: {
        fontSize: '1.5rem',
        padding: '0.80rem 2.6rem 0.80rem 2.6rem',
      },
    },
  },
}
