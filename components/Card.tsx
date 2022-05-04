import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

const Card = ({ children }: Props) => <div>{children}</div>

export default Card
