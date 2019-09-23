import 'styled-components'

interface Sizes {
  [key: string]: {
    fontSize?: string
    padding?: string
  }
}

declare module 'styled-components' {
  export interface DefaultTheme {
    fonts: {
      heading?: string,
      body?: string,
      code?: string
    }
    button: {
      sizes: Sizes
    }
  }
}
