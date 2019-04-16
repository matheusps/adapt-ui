interface Tones {
  basic: string
  light?: string
  dark?: string
}

interface ColorSystem {
  readonly ui: {
    base: Tones
    default: Tones
    primary: Tones
    success?: Tones
    warning?: Tones
    error?: Tones
  }
  readonly text: {
    display: Tones
    subtle?: Tones
    mutted?: Tones
  }
}

type TextColor = 'display' | 'subtle' | 'mutted'
type UiColor = 'base' | 'default' | 'primary' | 'success' | 'warning' | 'error'
type Tone = 'basic' | 'light' | 'dark'
