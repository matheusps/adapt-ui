import React from 'react'
/** @jsx jsx */
import { jsx, css } from '@emotion/core'

import { useLifting } from '../hooks/useLifting'
import { useTheme } from '../hooks'

interface Props extends NativeInputType {
  type:
    | 'text'
    | 'email'
    | 'url'
    | 'search'
    | 'tel'
    | 'password'
    | 'number'
    | 'date'
    | 'color'
    | 'file'
}

const TextInput: React.FC<Props> = ({ type, size, ...rest }) => {
  const { zIndex, bgColor, color } = useLifting('xl')
  const { elements } = useTheme()

  const borderRadius = elements.roundness
  return (
    <input
      css={css`
        z-index: ${zIndex};
        background-color: ${bgColor};
        color: ${color};
        border-radius: ${borderRadius};
        padding: 0.5rem 1.5rem 0.5rem 1.5rem;
        margin: 0.5rem;
        border: none;
        :focus {
          outline: none;
        }
      `}
      type={type}
    />
  )
}

export { TextInput }
