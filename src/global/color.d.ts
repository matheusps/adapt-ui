interface ColorShades {
  readonly darkest: String
  readonly dark: String
  readonly neutral: String
  readonly light: String
  readonly lightest: String
}

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
    confirm: String
  }
}
