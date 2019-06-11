interface TabsContext {
  currentTab: string | number
  onChange: Function
}

interface TabsProps {
  currentTab: string | number
  onChange: Function
  fixed?: boolean
  position?: 'top' | 'bottom'
}

interface TabProps {
  id: string | number
  label: string
  icon?: string
}
