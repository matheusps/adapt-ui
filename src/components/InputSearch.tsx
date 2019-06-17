import React, { useState } from 'react'
/** @jsx jsx */
import { jsx, css } from '@emotion/core'

import { InputText } from './InputText'
import { Icon } from './Icon'
import { Flexible } from '.'

const InputWrapper = ({ children }) => {
  return (
    <Flexible
      css={css`
        position: relative;
        width: 100%;
      `}
    >
      {children}
    </Flexible>
  )
}

const InputSearch: React.FC<NativeInputType> = props => {
  return (
    <InputWrapper>
      <Icon
        css={css`
          top: 50%;
          z-index: 999;
          left: 0.05rem;
          margin: 0 0.5rem;
          position: absolute;
          transform: translateY(-50%);
        `}
        name="search"
      />
      <InputText
        {...props}
        css={css`
          padding-left: 2.5rem;
        `}
        type="search"
      />
    </InputWrapper>
  )
}

export { InputSearch }
