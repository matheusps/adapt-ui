import React, { FunctionComponent } from 'react'
import styled from 'styled-components'
import { selectTextAppearance, selectUIAppearance } from '../../global/helpers'

interface Props extends EnhancedWithTheme {}

const Div = styled.div<EnhancedWithTheme>`
  background-color: ${props =>
    selectUIAppearance(props.theme, props.appearance, props.tone)};
  color: ${props => selectTextAppearance(props.theme, props.text, props.tone)};
  padding: 1rem;
`

const Container: FunctionComponent<Props> = ({
  appearance,
  tone,
  text,
  children,
}) => {
  return (
    <Div appearance={appearance} tone={tone} text={text}>
      {children}
    </Div>
  )
}

Container.defaultProps = {
  appearance: 'base',
  tone: 'basic',
  text: 'display',
}

export default Container
