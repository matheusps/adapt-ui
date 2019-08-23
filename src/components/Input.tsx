import React, { useState } from 'react'
import styled from 'styled-components'

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

const InputWrapper = styled(Flexible)<any>`
  position: relative;
  width: 100%;
  input {
    ${props => props.hasIconLeft && 'padding-left: 2.5rem'};
    ${props => props.hasIconRight && 'padding-right: 3rem'};
  }
`

const StyledInput = styled.input<any>(
  props => ({
    zIndex: props.zIndex,
    backgroundColor: props.backgroundColor,
    color: props.color,
    borderRadius: props.borderRadius,
  }),
  `width: 100%;
  margin: 0.5rem 0 0.5rem 0;
  padding: 0.8rem 1rem 0.8rem 1rem;
  border: none;
  :focus {
    outline: none;
  }`
)

const StyledIcon = styled(Icon)<any>`
  position: absolute;
  transform: translateY(-50%);
  top: 50%;
  z-index: 999;
  margin: 0 0.5;
  ${props => (props.right ? 'right: 0.05rem' : 'left: 0.05rem')};
`

const InputText: React.FC<Props> = ({ size, ...rest }) => {
  const { zIndex, bgColor, color } = useLifting('md')
  const { elements } = useTheme()
  const borderRadius = elements.roundness
  return (
    <StyledInput
      zIndex={zIndex}
      backgroundColor={bgColor}
      color={color}
      borderRadius={borderRadius}
      {...rest}
    />
  )
}

const InputWithIcon: React.FC<{
  icon: IconType
  input: Props
}> = props => {
  return (
    <InputWrapper hasIconLeft>
      <StyledIcon {...props.icon} />
      <InputText {...props.input} />
    </InputWrapper>
  )
}

const InputPassword: React.FC<Props> = props => {
  const [show, setShow] = useState(false)
  const { type, icon, ...rest } = props
  return (
    <InputWrapper hasIconRight>
      {icon ? (
        <InputWithIcon
          input={{
            type: show ? 'text' : 'password',
            ...rest,
          }}
          icon={{ name: 'key' }}
        />
      ) : (
        <InputText
          {...rest}
          type={show ? 'text' : 'password'}
          icon={{ name: 'key' }}
        />
      )}

      <IconButton
        style={{
          position: 'absolute',
          transform: 'translateY(-50%)',
          top: '50%',
          zIndex: 999,
          margin: '0 0',
          right: '0.05rem',
        }}
        icon={{
          name: show ? 'eye-slash' : 'eye',
        }}
        onClick={() => setShow(!show)}
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
