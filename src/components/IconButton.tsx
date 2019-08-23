import React, { FC } from 'react'

import { Icon } from './Icon'
import Clickable, { ClickableProps } from './core/Clickable'

interface Props extends ClickableProps {
  icon: IconType
}

const IconButton: FC<Props> = ({ children, icon, ...props }) => {
  return (
    <Clickable {...props}>
      <Icon {...icon} />
    </Clickable>
  )
}

export { IconButton }
