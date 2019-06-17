import React, { FC } from 'react'
/** @jsx jsx */
import { jsx, css } from '@emotion/core'

import { Surface } from './Surface'
import { TabsProvider } from '../context/TabsContext'

const Tabs: FC<TabsProps> = ({ activeTab, onTabClick, fixed, children }) => {
  return (
    <Surface
      lifting="lg"
      width="100%"
      css={css`
        position: ${fixed ? 'fixed' : 'inherit'};
      `}
    >
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
