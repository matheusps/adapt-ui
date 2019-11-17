import { createTokens } from 'styled-tokens'

const direction = {
  values: {
    row: 'row',
    'row--r': 'row-reverse',
    col: 'column',
    'col--r': 'column-reverse',
  },
  propName: {
    flexDirection: 'direction',
  },
}

const wrap = {
  values: {
    yes: 'wrap',
    reverse: 'wrap-reverse',
    no: 'nowrap',
  },
  propName: {
    flexWrap: 'wrap',
  },
}

const items = {
  values: {
    start: 'flex-start',
    end: 'flex-end',
    center: 'center',
    baseline: 'baseline',
    stretch: 'stretch',
    auto: 'auto',
  },
  propName: {
    alignItems: 'items',
    alignSelf: 'self',
  },
}

const justify = {
  values: {
    start: 'flex-start',
    end: 'flex-end',
    center: 'center',
    between: 'space-between',
    around: 'space-around',
  },
  propName: {
    justifyContent: 'justify',
  },
}

const content = {
  values: {
    start: 'flex-start',
    end: 'flex-end',
    center: 'center',
    between: 'space-between',
    around: 'space-around',
    stretch: 'stretch',
  },
  propName: {
    alignContent: 'content',
  },
}

const order = {
  values: {
    first: '0',
    second: '1',
    third: '2',
    fourth: '3',
    fith: '4',
    last: '99999999',
  },
  propName: {
    order: 'order',
  },
}

export type FlexTokens = Partial<{
  direction: keyof typeof direction.values
  wrap: keyof typeof wrap.values
  items: keyof typeof items.values
  self: keyof typeof items.values
  justify: keyof typeof justify.values
  content: keyof typeof content.values
  order: keyof typeof order.values
}>

export default [direction, wrap, items, justify, content, order].map(
  createTokens
)
