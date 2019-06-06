import React, { FC } from 'react'
import styled from 'styled-components'

const Div = styled.div`
  background-color: ${props => props.theme.lightest};
  color: ${props => props.theme.colors.darkest};
  padding: 1rem;
`

const Container: FC = ({ children }) => {
  return <Div>{children}</Div>
}

Container.defaultProps = {}

export default Container
