// src/components/DashboardHead.tsx
import { useEffect } from 'react'

function DashboardHead() {
  useEffect(() => {

    const loadedScripts: HTMLScriptElement[] = []
    // Cleanup
    return () => {
      loadedScripts.forEach(script => {
        if (document.body.contains(script)) {
          document.body.removeChild(script)
        }
      })
    }
  }, [])

  return (
    <></>
  )
}

export default DashboardHead