import { style } from '@vanilla-extract/css'
import { theme } from '../libs/theme.css'

export default style({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing.list,
})
