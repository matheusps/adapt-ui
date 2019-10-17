import styleComposer from './index'

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

export const sizeTokens = styleComposer(defaultSize) as SizeTokens

export type SizeScale = 'sm' | 'md' | 'lg'

export type SizeTokens = {
  height?: SizeScale
  width?: SizeScale
}
