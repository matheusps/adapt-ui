import React from 'react'
import { Flexible } from '.'

interface Props extends NativeFormType {
  flex: FlexibleType
}

const Form: React.FC<Props> = ({ flex, children, ...props }) => {
  return (
    <form {...props}>
      <Flexible {...flex}>{children}</Flexible>
    </form>
  )
}

Form.defaultProps = {
  flex: {
    wrap: 'wrap',
  },
}

export { Form }
