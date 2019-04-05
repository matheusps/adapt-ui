import React, { FunctionComponent } from 'react'

interface ContainerProps {}

const Container: FunctionComponent<ContainerProps> = ({ children }) => {
  return (
    <div style={{ backgroundColor: '#cecece', padding: '1rem' }}>
      {children}
    </div>
  )
}

export default Container
