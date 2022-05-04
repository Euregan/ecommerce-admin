import FieldInput from './FieldInput'

interface Props {
  value: string
  onChange: (value: string) => void
  label: string
}

const EmailInput = ({ value, onChange, label }: Props) => (
  <FieldInput type="email" value={value} onChange={onChange}>
    {label}
  </FieldInput>
)

export default EmailInput
