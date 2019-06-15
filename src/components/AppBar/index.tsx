import React, { FC } from 'react'
import Surface from '../Surface'
import Title from './Title'

interface Props extends HasSkin {
  fixed?: boolean
  title?: string
  theme: string
}

/**
 * TODO: Component meaning
 */
const AppBar: FC<Props> = ({ fixed, skin, title, children }) => {
  return (
    <Surface>
      {title && <Title text={title} />}
      {children}
    </Surface>
  )
}

AppBar.defaultProps = {
  skin: 'primary',
}

export default AppBar
