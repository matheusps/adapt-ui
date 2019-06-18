import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    readonly colors: Colors
    readonly elements: {
      roundness: string
    }
  }
}
