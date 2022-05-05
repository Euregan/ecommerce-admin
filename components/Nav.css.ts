import { style } from '@vanilla-extract/css'
import { theme } from '../libs/theme.css'

export const nav = style({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing.list,
  background: theme.background.dark,
  padding: theme.spacing.container,
})

export const a = style({
  color: theme.text.primary,
  fontWeight: 'bold',
  textDecoration: 'none',
})
