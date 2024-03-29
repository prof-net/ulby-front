import { EnumTheme, LOCAL_STORAGE_THEME, ThemeContext } from './ThemeContext'
import { useContext } from 'react'

interface IUseTheme {
  toggleTheme: () => void
  theme?: EnumTheme
}
export function useTheme (): IUseTheme {
  const { theme, setTheme } = useContext(ThemeContext)

  const toggleTheme = (): void => {
    const newTheme = theme === EnumTheme.DARK ? EnumTheme.LIGHT : EnumTheme.DARK
    if (setTheme != null) {
      setTheme(newTheme)
    }
    localStorage.setItem(LOCAL_STORAGE_THEME, newTheme)
  }

  return { theme, toggleTheme }
}
