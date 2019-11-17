import React from 'react'
import Collapsible from './index'
import CollapsibleToggle from './CollapsibleToggle'
import { Preflight } from '..'
import useCollapsibleState from './useCollapsibleState'

export default {
  title: 'Collapsible',
  decorators: [
    storyFn => (
      <div>
        <Preflight />
        {storyFn()}
      </div>
    ),
  ],
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
