import { useEffect, useState } from 'react'

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  })

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return windowSize
}

const useDevice = () => {
  const windowSize = useWindowSize()
  const isMobile = windowSize.width < 1920
  const isPhone = windowSize.width >= 360 && windowSize.width < 768
  const isTablet = windowSize.width >= 768 && windowSize < 1920

  return { isMobile, isPhone, isTablet }
}

export default useDevice
