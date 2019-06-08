import React, { FC } from 'react'
import styled from 'styled-components'

const Div = styled.div`
  background-color: ${props => props.theme.colors.substratum};
  color: ${props => props.theme.colors.text.display};
  padding: 1rem;
`

const Container: FC = ({ children }) => {
  return <Div>{children}</Div>
}

Container.defaultProps = {}

export default Container
