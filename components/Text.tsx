import { ReactNode } from 'react'
import style from './Text.css'

interface Props {
  header: string
  children: ReactNode
}

const Text = ({ header, children }: Props) => (
  <section className={style}>
    <h2>{header}</h2>
    {children}
  </section>
)

export default Text
