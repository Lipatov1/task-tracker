import { Layout as LayoutAntd } from 'antd'
import { Outlet } from 'react-router-dom'
import styles from './Layout.module.css'
import Footer from './Footer/Footer'
import Menu from './Menu/Menu'
import clsx from 'clsx'

const Layout = () => (
  <LayoutAntd className={styles.layout}>
    <LayoutAntd.Header className={styles.header}>
      <Menu />
    </LayoutAntd.Header>
    <LayoutAntd.Content className={clsx(styles.content, 'container')}>
      <Outlet />
    </LayoutAntd.Content>
    <LayoutAntd.Footer className={styles.footer}>
      <Footer />
    </LayoutAntd.Footer>
  </LayoutAntd>
)

export default Layout
