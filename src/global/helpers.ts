import { get } from 'lodash'

export const selectTheme = (
  props?: ThemeProps,
  choose?: Color,
  shade?: Shade
): string => get(props!, `colors.${choose!}.${shade!}`)

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
