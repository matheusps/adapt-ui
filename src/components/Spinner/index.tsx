import React, { FC } from 'react'
import styled, { keyframes } from 'styled-components'

import { getMeasure } from '../../helpers'

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

const StyledSvg = styled.svg`
  transition-property: transform;
  animation-name: ${infiniteSpin};
  animation-iteration-count: infinite;
  animation-timing-function: linear;
`

const Spinner: FC<Props> = ({ thickness, size, speed, gap }) => {
  return (
    <StyledSvg
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
        stroke={'black'}
        r={14 - getThickness(thickness!) / 2}
        fill="none"
        strokeWidth={getThickness(thickness!)}
        strokeDasharray={Math.PI * 2 * (11 - getGap(gap!))}
        strokeLinecap="round"
      />
    </StyledSvg>
  )
}

Spinner.defaultProps = {
  size: 'md',
  thickness: 'md',
  speed: 'normal',
  gap: 'lg',
}

type Props = {
  readonly speed?: Speed
  readonly gap?: Measure
  readonly thickness?: Measure
  readonly size?: Measure | number
}

export default Spinner
