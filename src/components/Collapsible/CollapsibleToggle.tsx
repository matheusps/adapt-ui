import React, { FC } from 'react'
import useCollapsibleState from './useCollapsibleState'
import Clickable, { ClickableProps } from '../Clickable'

const CollapsibleToggle: FC<CollapsibleToggleProps> = ({
  toggle,
  children,
  ...props
}) => {
  return (
    <Clickable onClick={toggle} {...props}>
      {children}
    </Clickable>
  )
}

export type CollapsibleToggleProps = ReturnType<typeof useCollapsibleState> &
  ClickableProps

export default CollapsibleToggle
