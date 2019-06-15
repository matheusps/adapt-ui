import React, { FC } from 'react'
/** @jsx jsx */
import { jsx, css, keyframes } from '@emotion/core'

import useTheme from '../../hooks/useTheme'
import { getMeasure, getColor } from '../../helpers'

interface Props extends HasSkin {
  readonly speed?: Speed
  readonly gap?: Measure
  readonly thickness?: Measure
  readonly size?: Measure | number
}

const infiniteSpin = keyframes`
  from {transform: rotate(0deg)}
  to {transform: rotate(360deg)}
`

export const getSpeed = (speed: Speed) =>
  speed === 'fast' ? 600 : speed === 'slow' ? 900 : 750

export const getThickness = (thickness: Measure) =>
  getMeasure(thickness, [2, 4, 6, 7])

export const getSize = (size: Measure | number) =>
  typeof size === 'number' ? size : getMeasure(size, [1.5, 2, 3, 4])

export const getGap = (gap: Measure) => getMeasure(gap, [1.5, 2, 3, 4])

const Loader: FC<Props> = ({ thickness, size, speed, gap, skin }) => {
  const { colors } = useTheme()
  const loaderSkin = getColor(colors.skin[skin!])

  return (
    <svg
      height={`${getSize(size!)}rem`}
      width={`${getSize(size!)}rem`}
      style={{ animationDuration: `${getSpeed(speed!)}ms` }}
      role="img"
      viewBox="0 0 32 32"
      css={css`
        transition-property: transform;
        animation-name: ${infiniteSpin};
        animation-iteration-count: infinite;
        animation-timing-function: linear;
      `}
    >
      <circle
        role="presentation"
        cx={16}
        cy={16}
        stroke={loaderSkin}
        r={14 - getThickness(thickness!) / 2}
        fill="none"
        strokeWidth={getThickness(thickness!)}
        strokeDasharray={Math.PI * 2 * (11 - getGap(gap!))}
        strokeLinecap="round"
      />
    </svg>
  )
}

Loader.defaultProps = {
  skin: 'primary',
  size: 'md',
  thickness: 'md',
  speed: 'normal',
  gap: 'lg',
}

export default Loader
