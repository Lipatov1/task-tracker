import styles from './Error.module.css'
import { Link } from 'react-router-dom'
import { FC } from 'react'

interface IError {
  status?: string
  text: string
}

const Error: FC<IError> = ({ status, text }) => (
  <div className={styles.box}>
    {status && <p className={styles.status}>{status}</p>}
    <p className={styles.text}>{text}</p>
    <Link className={styles.link} to={'/'}>
      Перейти на <span>главную</span>
    </Link>
  </div>
)

export default Error
