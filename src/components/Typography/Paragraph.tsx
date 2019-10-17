import styled from 'styled-components'
import { TypoSystem, typoSystem } from '../../tokenSystem/typo.system'

const Paragraph = styled.p<TypoSystem>`
  ${typoSystem}
  text-justify: auto;
`

export default Paragraph
