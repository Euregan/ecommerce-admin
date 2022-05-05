import { ReactNode } from 'react'
import style from './Card.css'

interface Props {
  children: ReactNode
}

const Card = ({ children }: Props) => <div className={style}>{children}</div>

export default Card
