import React, { FC } from 'react'
import Box from '../Box'

const Collapsible: FC<CollapsibleProps> = ({
  collapsed,
  children,
  ...props
}) => {
  return collapsed ? <Box {...props}>{children}</Box> : null
}

export type CollapsibleProps = { collapsed?: boolean }

export default Collapsible
