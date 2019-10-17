import React, { FC } from 'react'

import { TabsProvider } from './context'
import { Box } from '..'

const Tabs: FC<TabsProps> = ({ activeTab, onTabClick, children }) => {
  return (
    <Box width="lg">
      <TabsProvider
        value={{
          activeTab,
          onTabClick,
        }}
      >
        {children}
      </TabsProvider>
    </Box>
  )
}

export { Tabs }
