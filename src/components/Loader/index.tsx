import React, { FunctionComponent } from 'react'

import { Svg, Circle } from './helpers/styled'
import { getGap, getSpeed, getThickness } from './helpers/helpers'

const Loader: FunctionComponent<LoaderProps> = ({
  thickness,
  size,
  speed,
  color,
  gap,
}) => (
  <Svg
    height={size}
    width={size}
    style={{ animationDuration: `${getSpeed(speed!)}ms` }}
    role="img"
    viewBox="0 0 32 32"
  >
    <Circle
      role="presentation"
      cx={16}
      cy={16}
      color={color}
      r={14 - getThickness(thickness!) / 2}
      fill="none"
      strokeWidth={getThickness(thickness!)}
      strokeDasharray={Math.PI * 2 * (11 - getGap(gap!))}
      strokeLinecap="round"
    />
  </Svg>
)

Loader.defaultProps = {
  color: 'primary',
  size: '2rem',
  thickness: 'md',
  speed: 'normal',
  gap: 'lg',
}

export default Loader
