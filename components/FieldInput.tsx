import { ReactNode } from 'react'
import { label as labelStyle, input as inputStyle } from './FieldInput.css'

interface Props {
  type: 'text' | 'email' | 'password' | 'number'
  value: string
  onChange: (value: string) => void
  children: ReactNode
}

const FieldInput = ({ type, value, onChange, children }: Props) => (
  <label className={labelStyle}>
    {children}
    <input
      className={inputStyle}
      type={type}
      value={value}
      onChange={(event) => onChange(event.target.value)}
    />
  </label>
)

export default FieldInput
