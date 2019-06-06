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

export const lightenOrDarken = (color: string, amount: number) => {
  const colorNumber = parseInt(color.slice(1), 16)
  const safeColorNumber = (num: number) => (num > 255 ? 255 : num < 0 ? 0 : num)

  const red = safeColorNumber((colorNumber >> 16) + amount)
  const green = safeColorNumber((colorNumber & 0x0000ff) + amount)
  const blue = safeColorNumber(((colorNumber >> 8) & 0x00ff) + amount)

  return '#' + (green | (blue << 8) | (red << 16)).toString(16)
}
