import { style } from '@vanilla-extract/css'
import { theme } from '../libs/theme.css'

export const label = style({
  display: 'flex',
  flexDirection: 'column',
  fontWeight: 'bold',
  gap: theme.spacing.element,
})

export const input = style({
  padding: theme.spacing.element,
  border: theme.border,
  borderRadius: theme.borderRadius.element,
})
