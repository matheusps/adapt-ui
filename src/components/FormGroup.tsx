import React from 'react'
/** @jsx jsx */
import { jsx, css } from '@emotion/core'

import { Flexible } from './Flexible'

const FormGroup: React.FC<FlexibleType> = props => {
  return (
    <Flexible
      css={css`
        padding: 0.5rem;
      `}
      {...props}
    />
  )
}

FormGroup.defaultProps = {
  items: 'flex-start',
  direction: 'column',
}

export { FormGroup }
