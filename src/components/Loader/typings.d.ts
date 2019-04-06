type Measure = 'sm' | 'md' | 'lg' | 'xl'
type Speed = 'fast' | 'slow' | 'normal'

interface LoaderProps {
  color?: string
  speed?: Speed
  gap?: Measure
  thickness?: Measure
  size?: string
}
