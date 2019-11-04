import React, { FC } from 'react'
import Box, { BoxProps } from '../Box'

const Collapsible: FC<CollapsibleProps> = ({
  collapsed,
  children,
  ...props
}) => {
  return collapsed ? <Box {...props}>{children}</Box> : null
}

export type CollapsibleProps = { collapsed?: boolean } & BoxProps

export default Collapsible
