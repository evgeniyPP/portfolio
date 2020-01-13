import React, { useEffect, useState } from 'react'
import Preloader from '../components/preloader'

export default ({ children }) => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(false)
  }, [])

  if (loading) {
    return <Preloader />
  }

  return children
}
