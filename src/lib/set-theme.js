import { isBrowser } from './is-browser'
import { light, dark } from '../theming/theme'

export const setTheme = theme => {
  let matchColorScheme = false
  /** Check browser environment */
  if (isBrowser)
    if (localStorage.getItem('theme'))
      /** Check localStorage */
      matchColorScheme = localStorage.getItem('theme')
    else matchColorScheme = window.matchMedia('(prefers-color-scheme: dark)').matches
  localStorage.setItem('theme', 'dark')
  return (theme = matchColorScheme ? dark : light)
}
