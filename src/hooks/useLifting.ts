import React from 'react'
import { useTheme } from './useTheme'
import { getMeasure, getColor } from '../helpers'

const useLifting = (lifting?: Measure) => {
  const { colors } = useTheme()

  const getZIndex = (lifting?: Measure) =>
    lifting ? getMeasure(lifting!, [1, 2, 3, 4]) : 0

  const getAlpha = (lifting?: Measure) =>
    lifting ? getMeasure(lifting!, [0.05, 0.1, 0.15, 0.2]) : 0

  const zIndex = getZIndex(lifting)
  const bgColor = lifting
    ? getColor(colors.contrast, getAlpha(lifting))
    : getColor(colors.substratum)
  const color = getColor(colors.contrast)

  return {
    zIndex,
    color,
    bgColor,
  }
}

export { useLifting }
