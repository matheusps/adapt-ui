import React, { FC } from 'react'
/** @jsx jsx */
import { jsx, css, keyframes } from '@emotion/core'

import { getGap, getSpeed, getThickness, getSize } from '../../global/helpers'

import { getColor } from '../../helpers/getColor'
import useTheme from '../../hooks/useTheme'

interface Props extends HasSkin {
  readonly speed?: Speed
  readonly gap?: Measure
  readonly thickness?: Measure
  readonly size?: Measure
}

const infiniteSpin = keyframes`
  from {transform: rotate(0deg)}
  to {transform: rotate(360deg)}
`

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
