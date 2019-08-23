import React from 'react'
import Flexible, { FlexibleProps } from './core/Flexible'

interface Props extends NativeFormType {
  flex: FlexibleProps
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
