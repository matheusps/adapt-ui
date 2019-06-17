import React, { FC } from 'react'

import { Clickable, Icon } from '../index'

interface Props extends ClickableType {
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
