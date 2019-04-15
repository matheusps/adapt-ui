interface ThemeProps {
  readonly colors: ColorSystem
}

interface EnhancedWithTheme {
  readonly appearance?: UiColor
  readonly tone?: Tone
  readonly text?: TextColor
}
