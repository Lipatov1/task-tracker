import { ArrowRightOutlined, LoginOutlined } from '@ant-design/icons'
import { useAppSelector } from '../hooks/useAppSelector'
import { NavLink, Outlet } from 'react-router-dom'
import { Layout as LayoutAntd, Menu } from 'antd'
import { useActions } from '../hooks/useActions'
import styles from './Layout.module.css'
import { items } from './menu.data'
import cn from 'classnames'

const { Header, Content, Footer } = LayoutAntd

const Layout = () => {
  const { user } = useAppSelector((state) => state.user)
  const { logout } = useActions()

  return (
    <LayoutAntd className={styles.layout}>
      <Header className={styles.header}>
        <div
          className="container"
          style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}
        >
          <Menu mode="horizontal" items={items} />
          {user ? (
            <Menu mode="horizontal">
              {user.email}
              <Menu.Item icon={<ArrowRightOutlined />} onClick={logout}>
                Выйти
              </Menu.Item>
            </Menu>
          ) : (
            <Menu mode="horizontal" style={{ width: 150 }}>
              <Menu.Item icon={<LoginOutlined />}>
                <NavLink to="/auth">Войти</NavLink>
              </Menu.Item>
            </Menu>
          )}
        </div>
      </Header>
      <Content className={cn(styles.content, 'container')}>
        <Outlet />
      </Content>
      <Footer className={styles.footer}>
        Soccer Stat ©2023 Created by{' '}
        <a href="https://github.com/Lipatov1" target="_blank" rel="noreferrer">
          Ilya
        </a>
      </Footer>
    </LayoutAntd>
  )
}

export default Layout
