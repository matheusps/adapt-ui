import 'styled-components'

interface Sizes {
  [key: string]: {
    fontSize?: string
    padding?: string
  }
}

declare module 'styled-components' {
  export interface DefaultTheme {
    button: {
      sizes: Sizes
    }
  }
}
