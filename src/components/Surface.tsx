import React, { FC } from 'react'
import styled from 'styled-components'

import { useTheme } from '../hooks'
import Flexible, { FlexibleProps } from './core/Flexible'
import { useLifting } from '../hooks/useLifting'

interface Props extends FlexibleProps, Liftable {}

const StyledFlexible = styled(Flexible)<any>(props => ({
  zIndex: props.zIndex,
  backgroundColor: props.backgroundColor,
  color: props.color,
  margin: props.margin,
  padding: props.padding,
  borderRadius: props.borderRadius,
}))

/**
 * TODO: Separate margin and padding into constants.
 */
const Surface: FC<Props> = ({ lifting, children, ...rest }) => {
  const { elements } = useTheme()
  const { zIndex, bgColor, color } = useLifting(lifting)

  const borderRadius = elements.roundness

  return (
    <StyledFlexible
      {...rest}
      zIndex={zIndex}
      backgroundColor={bgColor}
      color={color}
      margin="0.5rem"
      padding="0.5rem"
      borderRadius={borderRadius}
    >
      {children}
    </StyledFlexible>
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
