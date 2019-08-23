import styled from 'styled-components'

interface Props extends NativeDivType, FlexibleType {}

const Flexible = styled.div<Props>(props => ({
  width: props.width,
  height: props.height,
  order: props.order,
  flexShrink: props.shrink,
  flexGrow: props.grow,
  flexBasis: props.basis,
  alignSelf: props.self,
  display: props.inline ? 'inline-flex' : 'flex',
  flexDirection: props.direction,
  flexWrap: props.wrap,
  justifyContent: props.justify,
  alignItems: props.items,
  alignContent: props.content,
}))

Flexible.defaultProps = {
  width: 'auto',
  height: 'auto',
  order: 0,
  shrink: 1,
  grow: 0,
  self: 'auto',
  basis: 'auto',
  inline: false,
  direction: 'row',
  wrap: 'nowrap',
  justify: 'flex-start',
  items: 'stretch',
  content: 'stretch',
}

export { Flexible }
