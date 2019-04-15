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

export const getMeasure = (measure: Measure, values: Array<any>) =>
  measure === 'sm'
    ? values[0]
    : measure === 'md'
    ? values[1]
    : measure === 'lg'
    ? values[2]
    : measure === 'xl'
    ? values[3]
    : values[0]
