interface Colors {
  substratum: String
  surface: {
    1: String
    2: String
    3: String
  }
  text: {
    display: String
    subtle: String
    muted: String
  }
  goal: {
    create: String
    destroy: String
    warn: String
    info: String
  }
}

interface ThemeProps {
  readonly colors: Colors
  readonly elements: {
    roundness: string
  }
}

interface withGoal {
  goal?: 'create' | 'destroy' | 'info' | 'warn'
}
