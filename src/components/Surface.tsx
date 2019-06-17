import React, { FC } from 'react'
/** @jsx jsx */
import { jsx, css } from '@emotion/core'

import { getColor, getMeasure } from '../helpers'
import { useTheme } from '../hooks'
import { Flexible } from './Flexible'

interface Props extends FlexibleType, Liftable {}

const getZIndex = (lifting?: Measure) =>
  lifting ? getMeasure(lifting!, [1, 2, 3, 4]) : 0

const getAlpha = (lifting?: Measure) =>
  lifting ? getMeasure(lifting!, [0.05, 0.1, 0.15, 0.2]) : 0

/**
 * TODO: Separate margin and padding into constants.
 */
const Surface: FC<Props> = ({ lifting, children, ...rest }) => {
  const { colors, elements } = useTheme()

  const zIndex = getZIndex(lifting)
  const bgColor = lifting
    ? getColor(colors.contrast, getAlpha(lifting))
    : getColor(colors.substratum)
  const color = getColor(colors.contrast)
  const borderRadius = elements.roundness

  return (
    <Flexible
      {...rest}
      css={css`
        z-index: ${zIndex};
        background-color: ${bgColor};
        color: ${color};
        margin: 0.5rem;
        padding: 0.5rem;
        border-radius: ${borderRadius};
      `}
    >
      {children}
    </Flexible>
  )
}

Surface.defaultProps = {
  width: 'auto',
  height: 'auto',
  order: 0,
  shrink: 1,
  grow: 0,
  self: 'auto',
  basis: 'auto',
  inline: false,
  direction: 'row',
  wrap: 'nowrap',
  justify: 'flex-start',
  items: 'stretch',
  content: 'stretch',
}

export { Surface }
