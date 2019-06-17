import React, { useState } from 'react'
/** @jsx jsx */
import { jsx, css } from '@emotion/core'

import { InputText } from './InputText'
import { IconButton } from './IconButton'
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

const InputPassword: React.FC<NativeInputType> = props => {
  const [show, setShow] = useState(false)
  return (
    <InputWrapper>
      <InputText
        {...props}
        css={css`
          padding-right: 3rem;
        `}
        type={show ? 'text' : 'password'}
      />
      <IconButton
        css={css`
          top: 50%;
          z-index: 999;
          right: 0.05rem;
          margin: 0 0.25rem;
          position: absolute;
          transform: translateY(-50%);
        `}
        icon={{
          name: show ? 'eye-slash' : 'eye',
        }}
        onClick={() => setShow(!show)}
        ghost
      />
    </InputWrapper>
  )
}

export { InputPassword }
