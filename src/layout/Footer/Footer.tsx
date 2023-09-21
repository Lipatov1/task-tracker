import { FC } from 'react'
import styles from './Footer.module.css'

const Footer: FC = () => (
  <>
    Soccer Stat ©2023 Created by{' '}
    <a className={styles.link} href="https://github.com/Lipatov1" target="_blank" rel="noreferrer">
      Ilya
    </a>
  </>
)

export default Footer
