import { CopyOutlined, LoginOutlined, LogoutOutlined } from '@ant-design/icons'
import { useAppSelector } from '../../hooks/useAppSelector'
import { NavLink, useLocation } from 'react-router-dom'
import { useActions } from '../../hooks/useActions'
import { Menu as MenuAntd } from 'antd'
import styles from './Menu.module.css'
import { FC } from 'react'
import clsx from 'clsx'

const Menu: FC = () => {
  const { user } = useAppSelector((state) => state.user)
  const { logout } = useActions()
  const location = useLocation()

  return (
    <div className={clsx(styles.menu, 'container')}>
      <MenuAntd selectedKeys={[location.pathname]} className={styles.listMenu} mode="horizontal">
        <MenuAntd.Item disabled>
          <div className={styles.logo}>
            <img className={styles.logoImage} src="/images/logo.png" alt="Логотип Task Tracker" />
            <span className={styles.logoText}>Task Tracker</span>
          </div>
        </MenuAntd.Item>

        {user && (
          <MenuAntd.Item key="/tasks" icon={<CopyOutlined />}>
            <NavLink to="/tasks">Задачи</NavLink>
          </MenuAntd.Item>
        )}
      </MenuAntd>

      <MenuAntd selectedKeys={[location.pathname]} mode="horizontal" style={{ minWidth: 150 }}>
        {user ? (
          <>
            {user.email}
            <MenuAntd.Item key="/auth" icon={<LogoutOutlined />} onClick={logout}>
              Выйти
            </MenuAntd.Item>
          </>
        ) : (
          <MenuAntd.Item key="/auth" icon={<LoginOutlined />}>
            <NavLink to="/auth">Войти</NavLink>
          </MenuAntd.Item>
        )}
      </MenuAntd>
    </div>
  )
}

export default Menu
