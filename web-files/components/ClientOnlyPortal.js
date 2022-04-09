import { useRef, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'


// Modulated portal code for portals 

export default function ClientOnlyPortal({ children, selector }) {
 
  const ref = useRef()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    ref.current = document.querySelector(selector)
    setMounted(true)
  }, [selector])

  if (mounted) {
    
    return createPortal(children, ref.current)
  }
  else {
    
      return null
    }

}