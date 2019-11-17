import styled from 'styled-components'
import { flexboxTokens, FlexTokens } from '../../tokens'

import Box from '../Box'

const Flexible = styled(Box)<FlexTokens>`
  ${flexboxTokens}
`

Flexible.defaultProps = {
  order: 'first',
  self: 'auto',
  direction: 'row',
  wrap: 'no',
  justify: 'start',
  items: 'stretch',
  content: 'stretch',
}

export default Flexible
