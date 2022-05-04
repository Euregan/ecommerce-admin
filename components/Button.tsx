interface Props {
  label: string
  type?: 'submit'
}

const Button = ({ label, type }: Props) => <button type={type}>{label}</button>

export default Button
