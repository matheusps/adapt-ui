import React, { FC } from 'react'
/** @jsx jsx */
import { jsx, css } from '@emotion/core'

const Paragraph: FC = ({ children }) => {
  return (
    <p
      css={css`
        font-size: 1.2rem;
        font-weight: 400;
        text-justify: auto;
      `}
    >
      {children}
    </p>
  )
}

export default Paragraph
