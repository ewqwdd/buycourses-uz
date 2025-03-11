import { createContext, useContext } from 'react'

export const ThemeContext = createContext()
export const ThemeSetterContext = createContext()

export const useTheme = () => useContext(ThemeContext)
export const useToggleTheme = () => useContext(ThemeSetterContext)
