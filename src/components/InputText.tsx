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

const InputText: React.FC<Props> = ({ type, size, ...rest }) => {
  const { zIndex, bgColor, color } = useLifting('md')
  const { elements } = useTheme()
  const borderRadius = elements.roundness
  return (
    <input
      {...rest}
      css={css`
        z-index: ${zIndex};
        background-color: ${bgColor};
        color: ${color};
        border-radius: ${borderRadius};
        width: 100%;
        padding: 0.8rem 1rem 0.8rem 1rem;
        border: none;
        :focus {
          outline: none;
        }
      `}
      type={type}
    />
  )
}

export { InputText }
