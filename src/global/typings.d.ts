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
