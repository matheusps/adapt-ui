import React, { FC } from 'react'

import { Surface } from './Surface'
import { TabsProvider } from '../context/TabsContext'

const Tabs: FC<TabsProps> = ({ activeTab, onTabClick, fixed, children }) => {
  return (
    <Surface lifting="lg" width="100%">
      <TabsProvider
        value={{
          activeTab,
          onTabClick,
        }}
      >
        {children}
      </TabsProvider>
    </Surface>
  )
}

export { Tabs }
