import React from 'react'
import Clickable from './index'
import { Preflight } from '..'

export default {
  title: 'Clickable',
  decorators: [
    storyFn => (
      <div>
        <Preflight />
        {storyFn()}
      </div>
    ),
  ],
}

export const basic = () => (
  <Clickable onClick={() => alert('CLICKED')}>Click Me</Clickable>
)

export const full = () => (
  <Clickable onClick={() => alert('CLICKED FULL')} full>
    Clickable that takes de full width
  </Clickable>
)

export const disabled = () => (
  <Clickable disabled>This is disabled and cannot be clicked</Clickable>
)

/*export const asProp = () => (
  <Clickable
    as="img"
    src="https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/male_avatar_323b.svg"
    width="100"
    height="100"
    onClick={() => alert('CLICKED @ Image')}
  />
)*/
