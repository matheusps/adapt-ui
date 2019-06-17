import React from 'react'
import { library, IconPrefix } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { getMeasure } from '../helpers'

library.add(fab, fas, far)

const getPrefix = (type: any): IconPrefix => {
  switch (type) {
    case 'brand':
      return 'fab'
    case 'regular':
      return 'far'
    case 'solid':
      return 'fas'
    default:
      return 'far'
  }
}

const Icon: React.FC<IconType> = ({ name, type, size, ...rest }) => {
  const prefix = getPrefix(type!)
  const iconSize = getMeasure(size!, ['1x', '2x', '3x', '4x'])
  return <FontAwesomeIcon {...rest} size={iconSize} icon={[prefix, name]} />
}

Icon.defaultProps = {
  type: 'solid',
  size: 'sm',
}

export { Icon }
