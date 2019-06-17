import React from 'react'
/** @jsx jsx */
import { jsx, css } from '@emotion/core'

import { Flexible } from './Flexible'

interface Props {
  label: string
  inline: boolean
}

const FormGroup: React.FC<Props> = ({ label, children }) => {
  return (
    <Flexible
      css={css`
        padding: 0.5rem;
      `}
      items="flex-start"
      direction="column"
    >
      <label css={css``}>{label}</label>
      {children}
    </Flexible>
  )
}

export { FormGroup }
