import styled from 'styled-components'

type lifting = 1 | 2 | 3

interface Flex {
  /** width in percentage or px */
  width?: string
  /** height in percentage or px */
  height?: string
  /** element order */
  order?: number
  /** element grow */
  grow?: number
  /** element shrink */
  shrink?: number
  /** flex-basis */
  basis?: 'auto' | number
  /** align-self */
  self?: 'auto' | 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch'
  /** if is inline-flex */
  inline?: boolean
  /** flex-direction */
  direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse'
  /** flex-wrap */
  wrap?: 'nowrap' | 'wrap' | 'wrap-reverse'
  /** justify-content */
  justify?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
  /** align-items */
  items?: 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch'
  /** align-content */
  content?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'stretch'
}

interface Props extends Flex {
  /** Lifting of surface, none => substratum */
  lifting?: lifting
}

const Surface = styled.div<Props>(
  ({
    lifting,
    theme: {
      colors: { text, surface, substratum },
      elements: { roundness },
    },
    ...props
  }) => ({
    zIndex: lifting ? lifting : 0,
    backgroundColor: lifting ? surface[lifting] : substratum,
    color: text.display,
    margin: '0.5rem',
    padding: '1rem',
    borderRadius: roundness,
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
  })
)

Surface.defaultProps = {
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

export default Surface
