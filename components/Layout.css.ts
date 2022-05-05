import { style } from '@vanilla-extract/css'
import { theme } from '../libs/theme.css'

export const main = style({
  display: 'flex',
  justifyContent: 'stretch',
  minHeight: '100%',
})

export const section = style({
  margin: theme.spacing.page,
})
