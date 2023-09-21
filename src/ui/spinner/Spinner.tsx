import styles from './Spinner.module.css'
import { FC } from 'react'

const Spinner: FC = () => (
  <div className={styles.spinner}>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
)

export default Spinner
