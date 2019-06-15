import React, { FC } from 'react'
/** @jsx jsx */
import { jsx, css } from '@emotion/core'

import { getColor, getMeasure } from '../../helpers'
import useTheme from '../../hooks/useTheme'

interface Flex {
  /** width in percentage or px */
  width?: string
  /** height in percentage or px */
  height?: string
  /** element order */
  order?: number
  /** element grow */
  grow?: number
  /** element shrink */
  shrink?: number
  /** flex-basis */
  basis?: 'auto' | number
  /** align-self */
  self?: 'auto' | 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch'
  /** if is inline-flex */
  inline?: boolean
  /** flex-direction */
  direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse'
  /** flex-wrap */
  wrap?: 'nowrap' | 'wrap' | 'wrap-reverse'
  /** justify-content */
  justify?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
  /** align-items */
  items?: 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch'
  /** align-content */
  content?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'stretch'
}

interface Props extends Flex, Liftable {}

const getZIndex = (lifting?: Measure) =>
  lifting ? getMeasure(lifting!, [1, 2, 3, 4]) : 0

const getAlpha = (lifting?: Measure) =>
  lifting ? getMeasure(lifting!, [0.05, 0.1, 0.15, 0.2]) : 0

/**
 * TODO: Separate margin and padding into constants.
 */
const Surface: FC<Props> = ({
  lifting,
  width,
  height,
  order,
  shrink,
  grow,
  basis,
  self,
  inline,
  direction,
  wrap,
  justify,
  content,
  items,
  children,
}) => {
  const { colors, elements } = useTheme()

  const zIndex = getZIndex(lifting)
  const bgColor = lifting
    ? getColor(colors.contrast, getAlpha(lifting))
    : getColor(colors.substratum)
  const color = getColor(colors.contrast)
  const borderRadius = elements.roundness

  return (
    <div
      css={css`
        z-index: ${zIndex};
        background-color: ${bgColor};
        color: ${color};
        margin: 0.5rem;
        padding: 0.5rem;
        border-radius: ${borderRadius};
        width: ${width};
        height: ${height};
        order: ${order};
        flex-shrink: ${shrink};
        flex-grow: ${grow};
        flex-basis: ${basis};
        align-self: ${self};
        display: ${inline ? 'inline-flex' : 'flex'};
        flex-direction: ${direction};
        flex-wrap: ${wrap};
        justify-content: ${justify};
        align-items: ${items};
        align-content: ${content};
      `}
    >
      {children}
    </div>
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

export default Surface
