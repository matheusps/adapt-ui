import React, { FC } from 'react'

import { Svg, Circle } from './styled'
import { getGap, getSpeed, getThickness } from '../../global/helpers'

interface Props {
  readonly speed?: Speed
  readonly gap?: Measure
  readonly thickness?: Measure
  readonly size?: string
}

const Loader: FC<Props> = ({ thickness, size, speed, gap }) => (
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
      r={14 - getThickness(thickness!) / 2}
      fill="none"
      strokeWidth={getThickness(thickness!)}
      strokeDasharray={Math.PI * 2 * (11 - getGap(gap!))}
      strokeLinecap="round"
    />
  </Svg>
)

Loader.defaultProps = {
  size: '2rem',
  thickness: 'md',
  speed: 'normal',
  gap: 'lg',
}

export default Loader
