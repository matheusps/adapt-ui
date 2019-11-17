import styled from 'styled-components'
import {
  scrollTokens,
  sizeTokens,
  ScrollVariation,
  SizeTokens,
} from '../../tokens'

import Box from '../Box'

const Scrollable = styled(Box)<ScrollVariation & SizeTokens>`
  ${scrollTokens}
  ${sizeTokens}
`

export default Scrollable
