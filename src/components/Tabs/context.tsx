import React from 'react'

const TabsContext = React.createContext<TabsContext>(null!)
const { Provider } = TabsContext

export { TabsContext, Provider as TabsProvider }
