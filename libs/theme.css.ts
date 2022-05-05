import { globalStyle, createGlobalTheme } from '@vanilla-extract/css'

export const theme = createGlobalTheme(':root', {
  background: {
    default: 'white',
    primary: '#65d2a7',
    primaryHover: '#51aa87',
    dark: '#565656',
  },
  text: {
    default: '#333333',
    primary: 'white',
  },
  spacing: {
    page: '2rem',
    container: '1.2rem',
    betweenElements: '1.2rem',
    list: '0.75rem',
    element: '0.2rem',
  },
  shadow:
    'rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;',
  border: 'solid 1px #cad0d8',
  borderRadius: {
    container: '0.5rem',
    element: '0.25rem',
  },
})

globalStyle('html, body', {
  margin: 0,
  background: '#f2f4f7',
  fontFamily: 'arial',
  height: '100%',
  color: theme.text.default,
})

globalStyle('h1, h2, h3, h4, h5, h6', {
  margin: 0,
})

globalStyle('p', {
  margin: 0,
})

globalStyle('#__next', {
  height: '100%',
})
