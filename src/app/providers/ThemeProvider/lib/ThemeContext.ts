import { createContext } from 'react'

export enum EnumTheme {
  'DARK' = 'dark',
  'LIGHT' = 'light'
}

export interface IThemeContext {
  theme?: EnumTheme
  setTheme?: (theme: EnumTheme) => void
}

export const ThemeContext = createContext<IThemeContext>({})

export const LOCAL_STORAGE_THEME = 'theme'
