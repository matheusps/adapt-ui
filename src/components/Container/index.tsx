import React, { FunctionComponent } from 'react'
import styled from 'styled-components'
import { selectTheme } from '../../global/helpers'

interface Props extends EnhancedWithTheme {}

const Div = styled.div<EnhancedWithTheme>`
  background-color: ${props =>
    selectTheme(props.theme, props.color, props.shade)};
  padding: 1rem;
`

const Container: FunctionComponent<Props> = ({ color, shade, children }) => {
  return (
    <Div color={color} shade={shade}>
      {children}
    </Div>
  )
}

Container.defaultProps = {
  color: 'base',
  shade: 'default',
}

export default Container
