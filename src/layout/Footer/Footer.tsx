import styles from './Footer.module.css'
import { FC } from 'react'

const Footer: FC = () => (
  <>
    Soccer Stat ©2023 Created by{' '}
    <a className={styles.link} href="https://github.com/Lipatov1" target="_blank" rel="noreferrer">
      Ilya
    </a>
  </>
)

export default Footer
