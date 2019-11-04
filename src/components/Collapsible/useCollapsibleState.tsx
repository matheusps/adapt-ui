import { useState, useCallback } from 'react'

export default function useCollapsibleState(initalState: boolean = false) {
  const [collapsed, setCollapsed] = useState<boolean>(initalState)

  const toggle = useCallback(() => {
    setCollapsed(!collapsed)
  }, [collapsed])

  const collapse = useCallback(() => {
    setCollapsed(true)
  }, [collapsed])

  const uncollapse = useCallback(() => {
    setCollapsed(false)
  }, [collapsed])

  return {
    collapsed,
    toggle,
    collapse,
    uncollapse,
  }
}
