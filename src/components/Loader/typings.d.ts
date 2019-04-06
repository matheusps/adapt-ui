type Measure = 'sm' | 'md' | 'lg' | 'xl'
type Speed = 'fast' | 'slow' | 'normal'
type Color = 'primary'
interface LoaderProps {
  color?: Color
  speed?: Speed
  gap?: Measure
  thickness?: Measure
  size?: string
}
