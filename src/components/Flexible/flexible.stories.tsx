import React from 'react'
import Flexible from './index'
import { AdaptProvider } from '..'

export default {
  title: 'Flexible',
  decorators: [storyFn => <AdaptProvider>{storyFn()}</AdaptProvider>],
}

export const basic = () => <Flexible>Flex container</Flexible>

/** # Flexible

## Direction

### Row

<Playground>
  <Flexible direction="row">
    <Flexible lifting="sm">1</Flexible>
    <Flexible lifting="md">2</Flexible>
    <Flexible lifting="lg">3</Flexible>
  </Flexible>
</Playground>

### Row Reverse

<Playground>
  <Flexible direction="row-reverse">
    <Flexible lifting="sm">1</Flexible>
    <Flexible lifting="md">2</Flexible>
    <Flexible lifting="lg">3</Flexible>
  </Flexible>
</Playground>

### Column

<Playground>
  <Flexible direction="column">
    <Flexible lifting="sm">1</Flexible>
    <Flexible lifting="md">2</Flexible>
    <Flexible lifting="lg">3</Flexible>
  </Flexible>
</Playground>

### Column Reverse

<Playground>
  <Flexible direction="column-reverse">
    <Flexible lifting="sm">1</Flexible>
    <Flexible lifting="md">2</Flexible>
    <Flexible lifting="lg">3</Flexible>
  </Flexible>
</Playground>

## Flexbox wrap

### Wrap

<Playground>
  <Flexible wrap="wrap">
    <Flexible width="30%" lifting="sm">
      1
    </Flexible>
    <Flexible width="30%" lifting="md">
      2
    </Flexible>
    <Flexible width="30%" lifting="lg">
      3
    </Flexible>
  </Flexible>
</Playground>

### Wrap Reverse

<Playground>
  <Flexible wrap="wrap-reverse">
    <Flexible width="30%" lifting="sm">
      1
    </Flexible>
    <Flexible width="30%" lifting="md">
      2
    </Flexible>
    <Flexible width="30%" lifting="lg">
      3
    </Flexible>
  </Flexible>
</Playground>

## Items

### Flex start

<Playground>
  <Flexible items="flex-start">
    <Flexible lifting="sm">
      1 <br /> 1 <br /> 1
    </Flexible>
    <Flexible lifting="md">
      2 <br /> 2
    </Flexible>
    <Flexible lifting="lg">3</Flexible>
  </Flexible>
</Playground>

### Flex end

<Playground>
  <Flexible items="flex-end">
    <Flexible lifting="sm">
      1 <br /> 1 <br /> 1
    </Flexible>
    <Flexible lifting="md">
      2 <br /> 2
    </Flexible>
    <Flexible lifting="lg">3</Flexible>
  </Flexible>
</Playground>

### Center

<Playground>
  <Flexible items="center">
    <Flexible lifting="sm">
      1 <br /> 1 <br /> 1
    </Flexible>
    <Flexible lifting="md">
      2 <br /> 2
    </Flexible>
    <Flexible lifting="lg">3</Flexible>
  </Flexible>
</Playground>

### Baseline

<Playground>
  <Flexible items="baseline">
    <Flexible lifting="sm">
      1 <br /> 1 <br /> 1
    </Flexible>
    <Flexible lifting="md">
      2 <br /> 2
    </Flexible>
    <Flexible lifting="lg">3</Flexible>
  </Flexible>
</Playground>

### Stretch

<Playground>
  <Flexible items="stretch">
    <Flexible lifting="sm">
      1 <br /> 1 <br /> 1
    </Flexible>
    <Flexible lifting="md">
      2 <br /> 2
    </Flexible>
    <Flexible lifting="lg">3</Flexible>
  </Flexible>
</Playground>

## Justify

### Flex start

<Playground>
  <Flexible justify="flex-start">
    <Flexible width="20%" lifting="sm">
      1
    </Flexible>
    <Flexible width="20%" lifting="md">
      2
    </Flexible>
    <Flexible width="20%" lifting="lg">
      3
    </Flexible>
  </Flexible>
</Playground>

### Flex end

<Playground>
  <Flexible justify="flex-end">
    <Flexible width="20%" lifting="sm">
      1
    </Flexible>
    <Flexible width="20%" lifting="md">
      2
    </Flexible>
    <Flexible width="20%" lifting="lg">
      3
    </Flexible>
  </Flexible>
</Playground>

### Center

<Playground>
  <Flexible justify="center">
    <Flexible width="20%" lifting="sm">
      1
    </Flexible>
    <Flexible width="20%" lifting="md">
      2
    </Flexible>
    <Flexible width="20%" lifting="lg">
      3
    </Flexible>
  </Flexible>
</Playground>

### Space between

<Playground>
  <Flexible justify="space-between">
    <Flexible width="20%" lifting="sm">
      1
    </Flexible>
    <Flexible width="20%" lifting="md">
      2
    </Flexible>
    <Flexible width="20%" lifting="lg">
      3
    </Flexible>
  </Flexible>
</Playground>

### Space around

<Playground>
  <Flexible justify="space-around">
    <Flexible width="20%" lifting="sm">
      1
    </Flexible>
    <Flexible width="20%" lifting="md">
      2
    </Flexible>
    <Flexible width="20%" lifting="lg">
      3
    </Flexible>
  </Flexible>
</Playground>

### Space evenly

<Playground>
  <Flexible justify="space-evenly">
    <Flexible width="20%" lifting="sm">
      1
    </Flexible>
    <Flexible width="20%" lifting="md">
      2
    </Flexible>
    <Flexible width="20%" lifting="lg">
      3
    </Flexible>
  </Flexible>
</Playground>

## Content

### Flex start

<Playground>
  <Flexible height="20rem" content="flex-start" wrap="wrap">
    <Flexible width="10rem" lifting="md">
      1
    </Flexible>
    <Flexible width="20rem" lifting="md">
      2
    </Flexible>
    <Flexible width="15rem" lifting="md">
      3
    </Flexible>
    <Flexible width="5rem" lifting="md">
      4
    </Flexible>
  </Flexible>
</Playground>

### Flex end

<Playground>
  <Flexible height="20rem" content="flex-end" wrap="wrap">
    <Flexible width="10rem" lifting="md">
      1
    </Flexible>
    <Flexible width="20rem" lifting="md">
      2
    </Flexible>
    <Flexible width="15rem" lifting="md">
      3
    </Flexible>
    <Flexible width="5rem" lifting="md">
      4
    </Flexible>
  </Flexible>
</Playground>

### Center

<Playground>
  <Flexible height="20rem" content="center" wrap="wrap">
    <Flexible width="10rem" lifting="md">
      1
    </Flexible>
    <Flexible width="20rem" lifting="md">
      2
    </Flexible>
    <Flexible width="15rem" lifting="md">
      3
    </Flexible>
    <Flexible width="5rem" lifting="md">
      4
    </Flexible>
  </Flexible>
</Playground>

### Space between

<Playground>
  <Flexible height="20rem" content="space-between" wrap="wrap">
    <Flexible width="10rem" lifting="md">
      1
    </Flexible>
    <Flexible width="20rem" lifting="md">
      2
    </Flexible>
    <Flexible width="15rem" lifting="md">
      3
    </Flexible>
    <Flexible width="5rem" lifting="md">
      4
    </Flexible>
  </Flexible>
</Playground>

### Space around

<Playground>
  <Flexible height="20rem" content="space-around" wrap="wrap">
    <Flexible width="10rem" lifting="md">
      1
    </Flexible>
    <Flexible width="20rem" lifting="md">
      2
    </Flexible>
    <Flexible width="15rem" lifting="md">
      3
    </Flexible>
    <Flexible width="5rem" lifting="md">
      4
    </Flexible>
  </Flexible>
</Playground>

### Stretch

<Playground>
  <Flexible height="20rem" content="stretch" wrap="wrap">
    <Flexible width="10rem" lifting="md">
      1
    </Flexible>
    <Flexible width="20rem" lifting="md">
      2
    </Flexible>
    <Flexible width="15rem" lifting="md">
      3
    </Flexible>
    <Flexible width="5rem" lifting="md">
      4
    </Flexible>
  </Flexible>
</Playground>

## Order

<Playground>
  <Flexible>
    <Flexible lifting="sm" order="3">
      1
    </Flexible>
    <Flexible lifting="md" order="1">
      2
    </Flexible>
    <Flexible lifting="lg" order="2">
      3
    </Flexible>
  </Flexible>
</Playground>

## Shrink

<Playground>
  <Flexible width="100%">
    <Flexible lifting="sm" shrink="lg" width="100%">
      1
    </Flexible>
    <Flexible lifting="md" shrink="sm" width="100%">
      2
    </Flexible>
    <Flexible lifting="lg" shrink="md" width="100%">
      3
    </Flexible>
  </Flexible>
</Playground>

## Grow

<Playground>
  <Flexible>
    <Flexible lifting="sm" grow={2}>
      1
    </Flexible>
    <Flexible lifting="md" grow={0}>
      2
    </Flexible>
    <Flexible lifting="lg" grow={1}>
      3
    </Flexible>
  </Flexible>
</Playground> */
