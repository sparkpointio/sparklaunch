import React, { useState } from 'react'
import { ThemeProvider as SCThemeProvider } from 'styled-components'
import { light, dark } from '@sparkpointio/sparkswap-uikit'

const CACHE_KEY = 'IS_DARK'

export interface ThemeContextType {
  isDark: boolean;
  toggleTheme: () => void;
}

const ThemeContext = React.createContext<ThemeContextType>({ isDark: true, toggleTheme: () => null })

const customColorsCollections = { 
  customColors: {
    BG1: '#00071e',
    BG2: light.colors.card
  }
}
const ThemeContextProvider: React.FC = ({ children }) => {
  const [isDark, setIsDark] = useState(() => {
    const isDarkUserSetting = localStorage.getItem(CACHE_KEY)
    return isDarkUserSetting ? JSON.parse(isDarkUserSetting) : true
  })

  const toggleTheme = () => {
    setIsDark((prevState: any) => {
      localStorage.setItem(CACHE_KEY, JSON.stringify(!prevState))
      return !prevState
    })
  }

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      <SCThemeProvider theme={isDark ? dark : light}>
          {children}
      </SCThemeProvider>
    </ThemeContext.Provider>
  )
}

interface CustomColorsType {
  BG1: string
  BG2: string
}

interface CustomThemeType {
  customColors?: CustomColorsType;
}
export const CustomThemeContext = React.createContext<CustomThemeType>({})

const CustomThemeContextProvider: React.FC = ({ children }) => {
  const [isDark, setIsDark] = useState(() => {
    const isDarkUserSetting = localStorage.getItem(CACHE_KEY)
    return isDarkUserSetting ? JSON.parse(isDarkUserSetting) : true
  })

  const toggleTheme = () => {
    setIsDark((prevState: any) => {
      localStorage.setItem(CACHE_KEY, JSON.stringify(!prevState))
      return !prevState
    })
  }

  return (
    <CustomThemeContext.Provider value={customColorsCollections}>
      {children}
    </CustomThemeContext.Provider>
  )
}

export { ThemeContext, ThemeContextProvider, CustomThemeContextProvider }