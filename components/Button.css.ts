import { style } from '@vanilla-extract/css'
import { theme } from '../libs/theme.css'

const base = style({
  padding: theme.spacing.element,
  borderRadius: theme.borderRadius.element,
  cursor: 'pointer',
  fontWeight: 'bold',
})

export const primary = style([
  base,
  {
    color: theme.text.primary,
    background: theme.background.primary,
    ':hover': {
      background: theme.background.primaryHover,
    },
    border: 'none',
  },
])

export const secondary = style([
  base,
  {
    background: theme.background.default,
    border: theme.border,
  },
])
