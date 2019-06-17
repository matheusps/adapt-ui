import React, { useState } from 'react'
/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { Icon } from './Icon'
import { TextInput } from './TextInput'
import { IconButton } from './IconButton'
import { Flexible } from './Flexible'

interface Props {
  show?: boolean
}

const PasswordInput: React.FC<Props> = () => {
  const [show, setShow] = useState(false)
  return (
    <div
      css={css`
        position: relative;
      `}
    >
      <TextInput
        css={css`
          padding-right: 3rem;
        `}
        type={show ? 'text' : 'password'}
      />
      <IconButton
        css={css`
          margin: 0 0.25rem;
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          right: 0.05rem;
        `}
        icon={{
          name: show ? 'eye-slash' : 'eye',
        }}
        onClick={() => setShow(!show)}
        ghost
      />
    </div>
  )
}

PasswordInput.defaultProps = {
  show: false,
}

export { PasswordInput }
