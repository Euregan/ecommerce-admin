import { primary, secondary } from './Button.css'

interface Props {
  label: string
  type?: 'submit'
}

const Button = ({ label, type }: Props) => (
  <button className={type === 'submit' ? primary : secondary} type={type}>
    {label}
  </button>
)

export default Button
