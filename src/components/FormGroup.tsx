import React from 'react'
import styled from 'styled-components'

import Flexible, { FlexibleProps } from './core/Flexible'

const StyledFlexible = styled(Flexible)`
  padding: 0.5rem;
`

const FormGroup: React.FC<FlexibleProps> = props => {
  return <StyledFlexible {...props} />
}

FormGroup.defaultProps = {
  items: 'flex-start',
  direction: 'column',
}

export { FormGroup }
