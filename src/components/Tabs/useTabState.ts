import { useState } from 'react'

const useTabState = (initalTab: tabID) => {
  const [activeTab, setActiveTab] = useState<tabID>(initalTab)

  const onTabClick = (id: tabID) => {
    setActiveTab(id)
  }

  return {
    activeTab,
    onTabClick,
  }
}

export { useTabState }
