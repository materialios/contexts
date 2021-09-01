import { createContext, useState } from 'react'

const DrawerContext = createContext()

/**
 * DrawerContextProvider
 */
export const DrawerContextProvider = ({ children }) => {
  const [drawer, setDrawer] = useState({
    show: false
  })

  return (
    <DrawerContext.Provider value={{ drawer, setDrawer }}>
      {children}
    </DrawerContext.Provider>
  )
}

export default DrawerContext
