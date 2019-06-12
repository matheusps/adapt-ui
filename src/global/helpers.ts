import { useContext } from 'react'
import { ThemeContext } from 'styled-components'

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

export const getSpeed = (speed: Speed) =>
  speed === 'fast' ? 600 : speed === 'slow' ? 900 : 750

export const getThickness = (thickness: Measure) =>
  thickness === 'sm'
    ? 2
    : thickness === 'md'
    ? 4
    : thickness === 'lg'
    ? 6
    : thickness === 'xl'
    ? 8
    : 4

export const getSize = (size: Measure) =>
  size === 'sm'
    ? 2
    : size === 'md'
    ? 4
    : size === 'lg'
    ? 6
    : size === 'xl'
    ? 8
    : 4

export const getGap = (gap: Measure) =>
  gap === 'sm' ? 1 : gap === 'md' ? 3 : gap === 'lg' ? 4 : gap === 'xl' ? 5 : 4

export const lightenOrDarken = (color: string, amount: number) => {
  const colorNumber = parseInt(color.slice(1), 16)
  const safeColorNumber = (num: number) => (num > 255 ? 255 : num < 0 ? 0 : num)

  const red = safeColorNumber((colorNumber >> 16) + amount)
  const green = safeColorNumber((colorNumber & 0x0000ff) + amount)
  const blue = safeColorNumber(((colorNumber >> 8) & 0x00ff) + amount)

  return '#' + (green | (blue << 8) | (red << 16)).toString(16)
}

/**
 * Returns the RGBA of given skinType
 * @param skin
 * @param alpha
 */
export const getSkin = (skin: skinType, alpha = 1) => {
  const themeContext = useContext<ThemeProps>(ThemeContext)
  const { r, g, b } = themeContext.colors.skin[skin]
  return `rgba(${r},${g},${b},${alpha})`
}

export const getColor = (color: Color, alpha = 1) =>
  `rgba(${color.r}, ${color.g}, ${color.b}, ${alpha})`
