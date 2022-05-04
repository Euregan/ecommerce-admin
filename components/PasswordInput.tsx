import FieldInput from './FieldInput'

interface Props {
  value: string
  onChange: (value: string) => void
  label: string
}

const PasswordInput = ({ value, onChange, label }: Props) => (
  <FieldInput type="password" value={value} onChange={onChange}>
    {label}
  </FieldInput>
)

export default PasswordInput
