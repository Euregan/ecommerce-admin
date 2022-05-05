import { ReactNode } from 'react'
import style from './Form.css'

interface Props {
  onSubmit: () => void
  children: ReactNode
}

const Form = ({ children, onSubmit }: Props) => (
  <form
    className={style}
    onSubmit={(event) => {
      event.preventDefault()
      onSubmit()
    }}
  >
    {children}
  </form>
)

export default Form
