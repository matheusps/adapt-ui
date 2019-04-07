import { get } from 'lodash'

export const selectTheme = (
  props?: ThemeProps,
  choose?: Color,
  shade?: Shade
): string => get(props!, `colors.${choose!}.${shade!}`)
