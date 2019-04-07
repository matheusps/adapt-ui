import React, { FunctionComponent } from 'react'
import styled from 'styled-components'

interface ContainerProps {
  bg: 'primary'
  theme?: any
}

const Div = styled.div`
  background-color: ${(props: ContainerProps) => {
    switch (props.bg) {
      case 'primary':
        return props.theme.colors.primary.lighten
    }
  }};
  padding: 1rem;
`

const Container: FunctionComponent<ContainerProps> = ({ bg, children }) => {
  return <Div bg={bg}>{children}</Div>
}

Container.defaultProps = {
  bg: 'primary',
}

export default Container
