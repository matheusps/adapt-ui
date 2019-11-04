import React from 'react'
import Collapsible from './index'
import CollapsibleToggle from './CollapsibleToggle'
import { AdaptProvider } from '..'
import useCollapsibleState from './useCollapsibleState'

export default {
  title: 'Collapsible',
  decorators: [storyFn => <AdaptProvider>{storyFn()}</AdaptProvider>],
}

export const basic = () => {
  const collapse = useCollapsibleState()
  return (
    <>
      <CollapsibleToggle {...collapse}>Toggle</CollapsibleToggle>
      <Collapsible {...collapse}>Hello Button</Collapsible>
    </>
  )
}
