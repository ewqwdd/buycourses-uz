import { useCallback, useEffect, useState } from 'react'
import { ThemeContext, ThemeSetterContext } from './context'
import PropTypes from 'prop-types'

export default function ThemeProvider({ children }) {
  const [color, setColor] = useState(() => {
    const savedTheme = localStorage.getItem('theme')
    return savedTheme || 'dark'
  })

  useEffect(() => {
    document.body.setAttribute('data-theme', color)
    localStorage.setItem('theme', color)
  }, [color])

  const toggleTheme = useCallback(() => {
    setColor((prev) => (prev === 'dark' ? 'light' : 'dark'))
  }, [])

  return (
    <ThemeContext.Provider value={color}>
      <ThemeSetterContext.Provider value={toggleTheme}>{children}</ThemeSetterContext.Provider>
    </ThemeContext.Provider>
  )
}

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
}
