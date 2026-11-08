import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// The fonts are served from this site, not Google Fonts (blocked in China,
// where many of iShuo's learners are). Noto Sans SC comes in pieces by
// character range, so only the ones a page uses are downloaded.
import '@fontsource-variable/plus-jakarta-sans'
import '@fontsource-variable/noto-sans-sc'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
