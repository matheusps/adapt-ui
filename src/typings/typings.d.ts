type Measure = 'sm' | 'md' | 'lg' | 'xl'
type Speed = 'fast' | 'slow' | 'normal'
type Shape = 'squared' | 'rounded' | 'circle' | 'pill'
type tabID = string | number

type NativeDivType = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>

type NativeButtonType = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>

type NativeImgType = React.DetailedHTMLProps<
  React.ImgHTMLAttributes<HTMLImageElement>,
  HTMLImageElement
>

type NativeInputType = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>

type NativeFormType = React.DetailedHTMLProps<
  React.FormHTMLAttributes<HTMLFormElement>,
  HTMLFormElement
>

type NativeLabelType = React.DetailedHTMLProps<
  React.LabelHTMLAttributes<HTMLLabelElement>,
  HTMLLabelElement
>

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

interface TabsContext {
  activeTab: tabID
  onTabClick: Function
}

interface TabsProps {
  activeTab: tabID
  onTabClick: Function
  fixed?: boolean
  position?: 'top' | 'bottom'
}

interface TabProps {
  id: tabID
  label: string
  icon?: string
}

type IconType = {
  name: IconName
  size?: Measure
  type?: 'solid' | 'regular' | 'brand'
}

interface ButtonType extends ClickableType {
  size?: Measure
  loading?: boolean
}
