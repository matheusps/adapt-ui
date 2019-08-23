import styled from 'styled-components'
import Box from './Box'

export interface ScrollableProps {
  axis: 'x' | 'y' | 'xy'
}

const Scrollable = styled(Box)<ScrollableProps>`
  ${({ axis }) => `
    overflow-x: ${axis === 'x' || axis === 'xy' ? 'scroll' : 'hidden'};
    overflow-y: ${axis === 'y' || axis === 'xy' ? 'scroll' : 'hidden'};
  `};
`

export default Scrollable
