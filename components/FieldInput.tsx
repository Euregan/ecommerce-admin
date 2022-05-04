import { ReactNode } from 'react'

interface Props {
  type: 'text' | 'email' | 'password' | 'number'
  value: string
  onChange: (value: string) => void
  children: ReactNode
}

const FieldInput = ({ type, value, onChange, children }: Props) => (
  <label>
    {children}
    <input
      type={type}
      value={value}
      onChange={(event) => onChange(event.target.value)}
    />
  </label>
)

export default FieldInput
