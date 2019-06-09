import React, { FC } from 'react'

import { Svg, Circle } from './styled'
import { getGap, getSpeed, getThickness, getSize } from '../../global/helpers'

interface Props extends withGoal {
  readonly speed?: Speed
  readonly gap?: Measure
  readonly thickness?: Measure
  readonly size?: Measure
}

const Loader: FC<Props> = ({ thickness, size, speed, gap, goal }) => (
  <Svg
    height={`${getSize(size!)}rem`}
    width={`${getSize(size!)}rem`}
    style={{ animationDuration: `${getSpeed(speed!)}ms` }}
    role="img"
    viewBox="0 0 32 32"
  >
    <Circle
      goal={goal}
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
  goal: 'create',
  size: 'md',
  thickness: 'md',
  speed: 'normal',
  gap: 'lg',
}

export default Loader
