import React, { FunctionComponent } from 'react'

import AnimatedSvg from './styled/AnimatedSvg'

const getSpeed = (speed: Speed) =>
  speed === 'fast' ? 600 : speed === 'slow' ? 900 : 750

const getThickness = (thickness: Measure) =>
  thickness === 'sm'
    ? 2
    : thickness === 'md'
    ? 4
    : thickness === 'lg'
    ? 6
    : thickness === 'xl'
    ? 8
    : 4

const getGap = (gap: Measure) =>
  gap === 'sm' ? 1 : gap === 'md' ? 3 : gap === 'lg' ? 4 : gap === 'xl' ? 5 : 4

const Loader: FunctionComponent<LoaderProps> = ({
  thickness,
  size,
  speed,
  color,
  gap,
}) => (
  <AnimatedSvg
    height={size}
    width={size}
    style={{ animationDuration: `${getSpeed(speed)}ms` }}
    role="img"
    viewBox="0 0 32 32"
  >
    <circle
      role="presentation"
      cx={16}
      cy={16}
      r={14 - getThickness(thickness) / 2}
      stroke={color}
      fill="none"
      strokeWidth={getThickness(thickness)}
      strokeDasharray={Math.PI * 2 * (11 - getGap(gap))}
      strokeLinecap="round"
    />
  </AnimatedSvg>
)

Loader.defaultProps = {
  color: 'rgba(0,0,0,0.4)',
  size: '2rem',
  thickness: 'md',
  speed: 'normal',
}

export default Loader
