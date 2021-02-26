import { createContext, useState, useEffect } from 'react'
import { useResponsive } from '@materialios/hooks'

const ResponsiveContext = createContext()

/**
 * ResponsiveContextProvider
 */
export const ResponsiveContextProvider = ({ children }) => {
  const { orientation, device, size, width, height, className } = useResponsive()

  const [responsive, setResponsive] = useState({
    orientation,
    device,
    size,
    width,
    height,
    className
  })

  useEffect(() => {
    setResponsive({
      orientation,
      device,
      size,
      width,
      height,
      className
    })
  }, [orientation, device, size, width, height, className])

  return (
    <ResponsiveContext.Provider value={responsive}>
      {children}
    </ResponsiveContext.Provider>
  )
}

export default ResponsiveContext
