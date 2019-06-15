/**
 * Represent a color on RGB system
 */
interface Color {
  r: number
  g: number
  b: number
}

/**
 * Theme's color system
 */
interface Colors {
  /** Surfaces base color */
  substratum: Color
  /** Substratum contrast color that will be graded */
  contrast: Color
  /** Skins that can be applied to certain elements */
  skin: {
    primary: Color
    secondary: Color
    warning: Color
    danger: Color
    success: Color
  }
}

interface ThemeProps {
  readonly colors: Colors
  readonly elements: {
    roundness: string
  }
}

type skinType = 'primary' | 'secondary' | 'danger' | 'sucess'

/**
 * Represents components that could have skin
 */
interface HasSkin {
  skin?: skinType
}

/**
 * Represents elements that can be lifted
 */
interface Liftable {
  lifting?: Measure
}

interface Flexible {
  /** width in percentage or px */
  width?: string
  /** height in percentage or px */
  height?: string
  /** element order */
  order?: number
  /** element grow */
  grow?: number
  /** element shrink */
  shrink?: number
  /** flex-basis */
  basis?: 'auto' | number
  /** align-self */
  self?: 'auto' | 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch'
  /** if is inline-flex */
  inline?: boolean
  /** flex-direction */
  direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse'
  /** flex-wrap */
  wrap?: 'nowrap' | 'wrap' | 'wrap-reverse'
  /** justify-content */
  justify?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
  /** align-items */
  items?: 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch'
  /** align-content */
  content?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'stretch'
}
