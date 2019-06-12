import React, { FC } from 'react'

import { Svg } from './styled'

import {
  getGap,
  getSpeed,
  getThickness,
  getSize,
  getSkin,
} from '../../global/helpers'

interface Props extends HasSkin {
  readonly speed?: Speed
  readonly gap?: Measure
  readonly thickness?: Measure
  readonly size?: Measure
}

const Loader: FC<Props> = ({ thickness, size, speed, gap, skin }) => (
  <Svg
    height={`${getSize(size!)}rem`}
    width={`${getSize(size!)}rem`}
    style={{ animationDuration: `${getSpeed(speed!)}ms` }}
    role="img"
    viewBox="0 0 32 32"
  >
    <circle
      role="presentation"
      cx={16}
      cy={16}
      stroke={getSkin(skin!)}
      r={14 - getThickness(thickness!) / 2}
      fill="none"
      strokeWidth={getThickness(thickness!)}
      strokeDasharray={Math.PI * 2 * (11 - getGap(gap!))}
      strokeLinecap="round"
    />
  </Svg>
)

Loader.defaultProps = {
  skin: 'primary',
  size: 'md',
  thickness: 'md',
  speed: 'normal',
  gap: 'lg',
}

export default Loader
