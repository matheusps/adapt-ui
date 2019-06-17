import React from 'react'

interface Props extends NativeFormType {}

const Form: React.FC<Props> = ({ children }) => {
  return <form>{children}</form>
}

export { Form }
