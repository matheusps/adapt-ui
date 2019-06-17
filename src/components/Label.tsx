import React from 'react'
/** @jsx jsx */
import { jsx, css } from '@emotion/core'

const Label: React.FC<NativeLabelType> = ({ children, ...props }) => {
  return (
    <label
      css={css`
        font-size: 1.1rem;
        display: block;
        line-height: 1.2rem;
      `}
      {...props}
    >
      {children}
    </label>
  )
}

export { Label }
