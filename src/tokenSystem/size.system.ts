import tokenBuilder from './index'

const defaultSize = {
  scale: {
    sm: '50%',
    md: '2rem',
    lg: '3rem',
  },
  propName: {
    width: 'width',
    height: 'height',
  },
}

export const sizeSystem = tokenBuilder(defaultSize) as SizeSystem

export type SizeScale = 'sm' | 'md' | 'lg'

export type SizeSystem = {
  height?: SizeScale
  width?: SizeScale
}
