import React, { useState } from 'react'
/** @jsx jsx */
import { jsx, css } from '@emotion/core'

import { useTheme, useLifting } from '../hooks'
import { IconButton, Icon, Flexible } from '.'

interface Props extends NativeInputType {
  type?:
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
  icon?: IconType
}

const withIconStyles = (right = false) => `
  position: absolute;
  transform: translateY(-50%);
  top: 50%;
  z-index: 999;
  ${right ? 'right: 0.05rem' : 'left: 0.05rem'};
`

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
        margin: 0.5rem 0 0.5rem 0;
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

const InputWithIcon: React.FC<{
  icon: IconType
  input: Props
}> = props => {
  return (
    <InputWrapper>
      <Icon
        css={css`
          margin: 0 0.5rem;
          ${withIconStyles()}
        `}
        {...props.icon}
      />
      <InputText
        {...props.input}
        css={css`
          padding-left: 2.5rem;
        `}
      />
    </InputWrapper>
  )
}

const InputPassword: React.FC<Props> = props => {
  const [show, setShow] = useState(false)
  const { type, icon, ...rest } = props
  return (
    <InputWrapper>
      {icon ? (
        <InputWithIcon
          input={{
            type: show ? 'text' : 'password',
            ...rest,
          }}
          icon={{ name: 'key' }}
          css={css`
            padding-right: 3rem;
          `}
        />
      ) : (
        <InputText
          {...rest}
          type={show ? 'text' : 'password'}
          icon={{ name: 'key' }}
          css={css`
            padding-right: 3rem;
          `}
        />
      )}

      <IconButton
        css={css`
          margin: 0 0;
          ${withIconStyles(true)}
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

const Input: React.FC<Props> = props => {
  switch (props.type) {
    case 'password':
      return <InputPassword {...props} />
    default:
      return props.icon ? (
        <InputWithIcon icon={props.icon} input={props} />
      ) : (
        <InputText {...props} />
      )
  }
}

export { Input, InputText }
