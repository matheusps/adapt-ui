import { get } from 'lodash'

export const selectTextAppearance = (
  props?: ThemeProps,
  choose?: TextColor,
  tone?: Tone
): string => get(props!, `colors.text.${choose!}.${tone!}`)

export const selectUIAppearance = (
  props?: ThemeProps,
  choose?: UiColor,
  tone?: Tone
): string => get(props!, `colors.ui.${choose!}.${tone!}`)

export const getMeasure = (measure: Measure, [sm, md, lg, xl]: Array<any>) => {
  switch (measure) {
    case 'sm':
      return sm
    case 'md':
      return md
    case 'lg':
      return lg
    case 'xl':
      return xl
    default:
      return sm
  }
}
