import { style } from '@vanilla-extract/css'
import { theme } from '../libs/theme.css'

export default style({
  background: theme.background.default,
  padding: theme.spacing.container,
  boxShadow: theme.shadow,
  borderRadius: theme.borderRadius.container,
  maxWidth: '30rem',

  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing.betweenElements,

  margin: 'auto',
})
