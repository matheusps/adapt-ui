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

export const isBrightColor = (color: any) => {
  let r, g, b, hsp
  if (color.match(/^rgb/)) {
    color = color.match(
      /^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/
    )
    r = color[1]
    g = color[2]
    b = color[3]
  } else {
    color = +('0x' + color.slice(1).replace(color.length < 5 && /./g, '$&$&'))
    r = color >> 16
    g = (color >> 8) & 255
    b = color & 255
  }
  hsp = Math.sqrt(0.299 * (r * r) + 0.587 * (g * g) + 0.114 * (b * b))
  return hsp > 127.5
}
