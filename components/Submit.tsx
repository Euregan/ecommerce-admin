import Button from './Button'

interface Props {
  label: string
}

const Submit = ({ label }: Props) => <Button type="submit" label={label} />

export default Submit
