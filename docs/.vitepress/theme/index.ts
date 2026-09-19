import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import './custom.css'
import './styles/base.css'
import './styles/editorial.css'
import './styles/minimal.css'
import './styles/technical.css'\nimport './styles/sky.css'

export const BOOK_VISUAL_PROFILE = 'sky' as const

const theme: Theme = {
  extends: DefaultTheme,
  enhanceApp() {
    if (typeof document !== 'undefined') {
      document.documentElement.dataset.bookStyle = BOOK_VISUAL_PROFILE
    }
  }
}

export default theme
