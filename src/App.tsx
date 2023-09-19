import Tasks from './components/screens/tasks/Tasks'
import Auth from './components/screens/auth/Auth'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import locale from 'antd/es/locale/ru_RU'
import { Navigate } from 'react-router'
import { ConfigProvider } from 'antd'
import 'antd/dist/reset.css'
import { FC } from 'react'
import './App.css'

const App: FC = () => {
  return (
    <ConfigProvider
      locale={locale}
      theme={{
        token: {
          colorBgLayout: '#12121a',
          colorBgBase: '#262631',
          colorTextBase: '#ffffff',
          colorPrimary: '#7f6fd1',
          fontSize: 18,
        },
      }}
    >
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="tasks" />} />
          <Route path="auth" element={<Auth />} />
          <Route path="tasks" element={<Tasks />} />
        </Route>
      </Routes>
    </ConfigProvider>
  )
}

export default App
