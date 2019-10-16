import React from 'react'
import { AdaptProvider, useTabState, Tabs, Tab, Heading } from '..'

export default {
  title: 'Tabs',
  decorators: [storyFn => <AdaptProvider>{storyFn()}</AdaptProvider>],
}

export const basic = () => {
  const { activeTab, onTabClick } = useTabState('tab1')
  return (
    <>
      <Tabs activeTab={activeTab} onTabClick={onTabClick}>
        <Tab id="tab1" label="Tab 1" />
        <Tab id="tab2" label="Tab 2" />
        <Tab id="tab3" label="Tab 3" />
      </Tabs>
      {activeTab === 'tab1' && <Heading level={5}>Tab 1</Heading>}
      {activeTab === 'tab2' && <Heading level={5}>Tab 2</Heading>}
      {activeTab === 'tab3' && <Heading level={5}>Tab 3</Heading>}
    </>
  )
}
