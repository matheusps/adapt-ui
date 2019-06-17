import React, { FC } from 'react'
/** @jsx jsx */
import { jsx, css } from '@emotion/core'

import { useTheme } from '../hooks'
import { Flexible } from './Flexible'
import { useLifting } from '../hooks/useLifting'

interface Props extends FlexibleType, Liftable {}

/**
 * TODO: Separate margin and padding into constants.
 */
const Surface: FC<Props> = ({ lifting, children, ...rest }) => {
  const { elements } = useTheme()
  const { zIndex, bgColor, color } = useLifting(lifting)

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
