import React, { FunctionComponent } from 'react'

import AnimatedSvg from './helpers/AnimatedSvg'
import { getGap, getSpeed, getThickness } from './helpers/helpers'

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
    style={{ animationDuration: `${getSpeed(speed!)}ms` }}
    role="img"
    viewBox="0 0 32 32"
  >
    <circle
      role="presentation"
      cx={16}
      cy={16}
      r={14 - getThickness(thickness!) / 2}
      stroke={color}
      fill="none"
      strokeWidth={getThickness(thickness!)}
      strokeDasharray={Math.PI * 2 * (11 - getGap(gap!))}
      strokeLinecap="round"
    />
  </AnimatedSvg>
)

Loader.defaultProps = {
  color: 'rgba(0,0,0,0.4)',
  size: '2rem',
  thickness: 'md',
  speed: 'normal',
  gap: 'lg',
}

export default Loader
