interface TabsContext {
  activeTab: tabID
  onTabClick: Function
}

interface TabsProps {
  activeTab: tabID
  onTabClick: Function
  fixed?: boolean
  position?: 'top' | 'bottom'
}

interface TabProps {
  id: tabID
  label: string
  icon?: string
}
