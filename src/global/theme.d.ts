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
    info: Color
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

type skinType = 'primary' | 'secondary' | 'info' | 'danger' | 'sucess'

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
