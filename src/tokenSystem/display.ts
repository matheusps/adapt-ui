import { createTokens } from 'styled-tokens'

const draftDisplay = {
  values: {
    none: 'none',
    flex: 'flex',
    inline: 'inline',
    block: 'block',
    inlineBlock: 'inline-block',
  },
  propName: {
    display: 'display',
  },
}

export type DisplaySystem = Partial<{
  display: keyof typeof draftDisplay.values
}>

export default createTokens(draftDisplay)
