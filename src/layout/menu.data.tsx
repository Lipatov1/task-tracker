import { CopyOutlined } from '@ant-design/icons'
import { NavLink } from 'react-router-dom'
import styles from './Layout.module.css'
import type { MenuProps } from 'antd'

export const items: MenuProps['items'] = [
  {
    label: (
      <div className={styles.logo}>
        <img className={styles.logoImage} src="/images/logo.png" alt="Логотип SoccerStat" />
        <span className={styles.logoText}>Task Tracker</span>
      </div>
    ),
    key: 'logo',
    disabled: true,
  },
  {
    label: <NavLink to="/tasks">Задачи</NavLink>,
    key: 'tasks',
    icon: <CopyOutlined />,
  },
]
