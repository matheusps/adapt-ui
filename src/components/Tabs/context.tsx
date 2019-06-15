import React from 'react'

const TabsContext = React.createContext<TabsContext>(null!)
const { Provider } = TabsContext

export default TabsContext
export { Provider as TabsProvider }
